/**
 * Dossiê Unidades Escolares — lógica de processamento
 * Dados: escolas_data.js
 * PDF: layout idêntico ao dossiê (barras segmentadas, badge circular, cards gerais)
 */

// Pesos internos de Relações Interpessoais (60% da nota final)
const PESOS_RELACOES = {
    "Entre os Inspetores da Unidade": 0.30,
    "Inspetores x Direção": 0.25,
    "Inspetores x Setor Pedagógico": 0.25,
    "Inspetores x Professores": 0.15,
    "Inspetores x Secretaria": 0.05
};

// Pesos internos de Características da Escola (40% da nota final)
// Ordem de hierarquia (do que vale mais ao que vale menos)
const PESOS_CARACTERISTICAS = {
    "Equilíbrio na Distribuição de Funções": 0.22,
    "Materiais para Recreio": 0.19,
    "Segurança Externa": 0.17,
    "Acesso (ônibus, bicicleta, estacionamento)": 0.14,
    "Estrutura Física e Mobiliária": 0.11,
    "Inclusão com Tutores Profissionais": 0.08,
    "Auxílio Pedagógico/Direção no Recreio": 0.06,
    "Comércio e Restaurantes no Entorno": 0.03
};

/**
 * Média ponderada de um bloco de itens, usando um mapa {nome do item: peso}.
 * Renormaliza automaticamente entre os itens que tiverem nota válida,
 * para não distorcer a média caso algum item esteja sem registro.
 */
function mediaPonderada(items, pesos) {
    let somaPesoNota = 0;
    let somaPeso = 0;
    (items || []).forEach(item => {
        const peso = pesos[item.item];
        if (peso == null) return;
        if (item.nota == null || isNaN(Number(item.nota))) return;
        somaPesoNota += peso * Number(item.nota);
        somaPeso += peso;
    });
    if (!somaPeso) return null;
    return somaPesoNota / somaPeso;
}

function calcularPontuacaoEscola(escola) {
    if (!escola || !escola.temRelatorio) return null;

    const mediaRel = mediaPonderada(escola.relacoesInterpessoais, PESOS_RELACOES);
    if (mediaRel == null) return null;

    const mediaCarRaw = mediaPonderada(escola.caracteristicasEscola, PESOS_CARACTERISTICAS);
    const mediaCar = mediaCarRaw == null ? 0 : mediaCarRaw;

    return Number(((mediaRel * 0.60) + (mediaCar * 0.40)).toFixed(1));
}

function getStatusClass(nota) {
    if (nota == null || isNaN(nota)) {
        return {
            label: "—",
            color: "#78716c",
            bgClass: "bg-stone-100 text-stone-600 border-stone-200",
            bar: "#a8a29e",
            badgeLabel: "—"
        };
    }
    // Alinhado à legenda do PDF: Crítico · Baixo · Regular · Bom · Excelente
    if (nota <= 1.5) {
        return {
            label: "Crítico",
            color: "#c2410c",
            bgClass: "bg-orange-100 text-orange-800 border-orange-200",
            bar: "#ef4444",
            badgeLabel: "CRÍTICO"
        };
    }
    if (nota <= 2.5) {
        return {
            label: "Baixo",
            color: "#ea580c",
            bgClass: "bg-orange-100 text-orange-800 border-orange-200",
            bar: "#f97316",
            badgeLabel: "BAIXO"
        };
    }
    if (nota <= 3.4) {
        return {
            label: "Regular",
            color: "#ca8a04",
            bgClass: "bg-yellow-100 text-yellow-800 border-yellow-200",
            bar: "#eab308",
            badgeLabel: "REGULAR"
        };
    }
    if (nota <= 4.4) {
        return {
            label: "Bom",
            color: "#65a30d",
            bgClass: "bg-lime-100 text-lime-800 border-lime-200",
            bar: "#84cc16",
            badgeLabel: "BOM"
        };
    }
    return {
        label: "Excelente",
        color: "#16a34a",
        bgClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
        bar: "#22c55e",
        badgeLabel: "EXCELENTE"
    };
}

/** Cor da barra conforme nota (escala dossiê) */
function barColor(nota) {
    if (nota == null || isNaN(nota)) return "#e7e5e4";
    if (nota <= 1.5) return "#ef4444";
    if (nota <= 2.5) return "#f97316";
    if (nota <= 3.4) return "#eab308";
    if (nota <= 4.4) return "#84cc16";
    return "#22c55e";
}

/** Segmentos de barra estilo dossiê (5 blocos) */
function barSegmentsHTML(nota, maxSeg = 5) {
    const filled = nota == null || isNaN(nota) ? 0 : Math.round((Number(nota) / 5) * maxSeg);
    const color = barColor(nota);
    let html = "";
    for (let i = 0; i < maxSeg; i++) {
        const bg = i < filled ? color : "#e7e5e4";
        html += `<span class="seg" style="background:${bg}"></span>`;
    }
    return html;
}

function escolasComFicha() {
    const arr = (typeof ESCOLAS_DATA !== "undefined" && Array.isArray(ESCOLAS_DATA))
        ? ESCOLAS_DATA
        : [];
    return arr
        .filter(e => e && e.temRelatorio)
        .sort((a, b) => (a.nome || "").localeCompare(b.nome || "", "pt-BR"));
}

function todasEscolas() {
    const arr = (typeof ESCOLAS_DATA !== "undefined" && Array.isArray(ESCOLAS_DATA))
        ? ESCOLAS_DATA
        : [];
    return arr.slice().sort((a, b) => (a.nome || "").localeCompare(b.nome || "", "pt-BR"));
}

function renderEscolas(lista) {
    const grid = document.getElementById("schoolsGrid");
    const emptyState = document.getElementById("emptyState");
    const countEl = document.getElementById("schoolCount");
    if (!grid) return;

    grid.innerHTML = "";

    if (!lista.length) {
        if (emptyState) emptyState.classList.remove("hidden");
        if (countEl) countEl.textContent = "0 unidades";
        return;
    }
    if (emptyState) emptyState.classList.add("hidden");
    if (countEl) {
        countEl.textContent =
            lista.length + " unidade" + (lista.length !== 1 ? "s" : "");
    }

    lista.forEach(escola => {
        const hasFicha = !!escola.temRelatorio;
        const score = calcularPontuacaoEscola(escola);
        const status = getStatusClass(score);
        const badgeClass = hasFicha
            ? status.bgClass
            : "bg-stone-50 text-stone-400 border-stone-200";
        const badgeText = hasFicha
            ? (score != null ? score.toFixed(1) : "—")
            : "Sem relato";

        const card = document.createElement("button");
        card.type = "button";
        card.className =
            "school-tile group text-left bg-white border rounded-xl p-4 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 " +
            (hasFicha
                ? "border-stone-200 hover:border-amber-400 hover:shadow-md"
                : "border-stone-200 border-dashed hover:border-stone-300");
        card.onclick = () => openModal(escola.id);
        card.innerHTML = `
            <div class="flex items-start justify-between gap-2 mb-2">
                <span class="text-[10px] font-bold tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">${escola.codigo || ""}</span>
                <span class="text-[11px] font-bold ${badgeClass} px-2 py-0.5 rounded-full border">${badgeText}</span>
            </div>
            <h3 class="text-sm font-semibold ${hasFicha ? "text-stone-800 group-hover:text-amber-700" : "text-stone-500"} leading-snug line-clamp-3">${escola.nome || ""}</h3>
        `;
        grid.appendChild(card);
    });
}

function filterSchools() {
    const query = (document.getElementById("searchInput")?.value || "")
        .toLowerCase()
        .trim();
    const regional = document.getElementById("regionalSelect")?.value || "todas";

    let lista = todasEscolas();

    if (query) {
        lista = lista.filter(
            e =>
                (e.nome || "").toLowerCase().includes(query) ||
                (e.codigo || "").toLowerCase().includes(query)
        );
    }

    if (regional !== "todas") {
        // Aceita valor completo ("BN - Regional...") ou só o código ("BN")
        lista = lista.filter(e => {
            const r = e.regional || "";
            return r === regional || r.startsWith(regional + " ") || r.startsWith(regional + " -");
        });
    }

    renderEscolas(lista);
}

function openModal(escolaId) {
    if (typeof ESCOLAS_DATA === "undefined" || !Array.isArray(ESCOLAS_DATA)) return;
    const escola = ESCOLAS_DATA.find(e => e.id === escolaId);
    if (!escola) return;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    setText("modalCode", escola.codigo || "");
    setText("modalTitle", escola.nome || "");
    setText("modalRegional", escola.regional || "");

    const noFichaEl = document.getElementById("modalNoFicha");
    const dataEl = document.getElementById("modalDataSections");
    const footerEl = document.getElementById("modalFooter");
    const modal = document.getElementById("schoolModal");

    if (!escola.temRelatorio) {
        if (noFichaEl) noFichaEl.classList.remove("hidden");
        if (dataEl) dataEl.classList.add("hidden");
        if (footerEl) footerEl.classList.add("hidden");
        if (modal) modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        if (window.lucide) lucide.createIcons();
        return;
    }

    if (noFichaEl) noFichaEl.classList.add("hidden");
    if (dataEl) dataEl.classList.remove("hidden");
    if (footerEl) footerEl.classList.remove("hidden");

    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);

    const scoreDisplay = document.getElementById("modalScoreDisplay");
    if (scoreDisplay) {
        scoreDisplay.innerText = score != null ? score.toFixed(1) + " / 5,0" : "—";
        scoreDisplay.style.color = status.color;
    }

    const scoreBadge = document.getElementById("modalScoreBadge");
    if (scoreBadge) {
        scoreBadge.innerText = status.label;
        scoreBadge.className = `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${status.bgClass}`;
    }

    setText("modalSynthesis", escola.sintese || "");
    setText("modalAdvice", escola.conselho ? `"${escola.conselho}"` : "");

    const g = escola.caracteristicasGerais || {};
    const generalGrid = document.getElementById("modalGeneralGrid");
    if (generalGrid) {
        generalGrid.innerHTML = [
            ["Alunos", g.alunos],
            ["Turmas", g.turmas],
            ["Inspetores", g.quadroInspetores],
            ["Ensino Integral", g.ensinoIntegral],
            ["UEI", g.uei],
            ["Soninho do Pré", g.soninhoPre],
            ["Ônibus Escolar", g.onibusEscolar],
            ["Portões", g.portoes],
            ["Público Atendido", g.publicoAtendido]
        ]
            .map(
                ([k, v]) => `
            <div>
                <span class="block text-stone-400 text-[11px] uppercase tracking-wide">${k}</span>
                <span class="font-semibold text-sm">${v || "—"}</span>
            </div>`
            )
            .join("");
    }

    renderScoreBars("modalInterpersonalList", escola.relacoesInterpessoais || []);
    renderScoreBars("modalSchoolCharList", escola.caracteristicasEscola || []);

    const btnPdf = document.getElementById("btnDownloadSinglePdf");
    if (btnPdf) btnPdf.onclick = () => gerarPDFEscola(escola);

    if (modal) modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (window.lucide) lucide.createIcons();
}

function renderScoreBars(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    (items || []).forEach((item, index) => {
        const n = item.nota != null && !isNaN(Number(item.nota)) ? Number(item.nota) : null;
        const notaStr = n != null ? n.toFixed(1).replace(".", ",") : "—";
        const color = barColor(n);
        const filled = n == null ? 0 : Math.round((n / 5) * 5);

        let segs = "";
        for (let i = 0; i < 5; i++) {
            segs += `<span class="inline-block h-2 w-5 rounded-sm mr-0.5" style="background:${i < filled ? color : "#e7e5e4"}"></span>`;
        }

        const div = document.createElement("div");
        div.className =
            "p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-2 cursor-pointer hover:border-amber-300 transition";
        div.onclick = () => {
            const obs = document.getElementById(`${containerId}_obs_${index}`);
            if (obs) obs.classList.toggle("hidden");
        };
        div.innerHTML = `
            <div class="flex items-center justify-between text-xs font-semibold gap-2">
                <span class="text-stone-700 leading-tight">${item.item || ""}</span>
                <span class="font-bold shrink-0" style="color:${color}">${notaStr}</span>
            </div>
            <div class="flex items-center">${segs}</div>
            <p id="${containerId}_obs_${index}" class="hidden text-[11px] text-stone-500 italic border-t border-stone-200/60 pt-2 leading-relaxed">
                ${item.obs || "Sem observação detalhada."}
            </p>`;
        container.appendChild(div);
    });
}

function closeModal() {
    const modal = document.getElementById("schoolModal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "";
}

/* ========== PDF — modelo "Raio-X Curitiba" ========== */
const PDF_KICKER = "RAIO-X CURITIBA: RETRATO DAS ESCOLAS PELOS INSPETORES";

function pdfScoreRing(score, status) {
    const pct = score != null ? Math.max(0, Math.min(1, score / 5)) : 0;
    const r = 50;
    const circumference = 2 * Math.PI * r;
    const offset = circumference * (1 - pct);
    const scoreStr = score != null ? score.toFixed(1).replace(".", ",") : "—";
    const label = status.badgeLabel || (status.label || "").toUpperCase();
    return `
        <div class="pdf-score-ring">
            <svg viewBox="0 0 120 120" width="92" height="92">
                <circle cx="60" cy="60" r="${r}" fill="none" stroke="#e7e5e4" stroke-width="9"/>
                <circle cx="60" cy="60" r="${r}" fill="none" stroke="${status.color}" stroke-width="9"
                    stroke-linecap="round" stroke-dasharray="${circumference.toFixed(2)}"
                    stroke-dashoffset="${offset.toFixed(2)}" transform="rotate(-90 60 60)"/>
            </svg>
            <div class="pdf-score-ring-inner">
                <div class="pdf-score-ring-value">${scoreStr}</div>
                <div class="pdf-score-ring-max">DE 5,0</div>
                <div class="pdf-score-ring-label" style="color:${status.color}">${label}</div>
            </div>
        </div>`;
}

function pdfBarRow(item) {
    const n = item.nota != null && !isNaN(Number(item.nota)) ? Number(item.nota) : null;
    const notaStr = n != null ? n.toFixed(1).replace(".", ",") : "—";
    const color = barColor(n);
    const filled = n == null ? 0 : Math.round((n / 5) * 5);
    let segs = "";
    for (let i = 0; i < 5; i++) {
        segs += `<span class="pdf-seg" style="background:${i < filled ? color : "#e7e5e4"}"></span>`;
    }
    return `
        <div class="pdf-metric">
            <div class="pdf-metric-top">
                <span class="pdf-metric-name">${item.item || ""}</span>
                <span class="pdf-metric-nota" style="color:${color}">${notaStr}</span>
            </div>
            <div class="pdf-segs">${segs}</div>
        </div>`;
}

function gerarTemplateHTMLPDF(escola, pageNum = 1, totalPaginas = 1) {
    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);
    const g = escola.caracteristicasGerais || {};
    const scoreStr = score != null ? score.toFixed(1).replace(".", ",") : "—";
    const pageNumStr = String(pageNum).padStart(2, "0");
    const totalStr = String(totalPaginas).padStart(2, "0");

    const geralItems = [
        { icon: "users", label: "ALUNOS", value: g.alunos || "—" },
        { icon: "layers", label: "TURMAS", value: g.turmas || "—" },
        { icon: "user-check", label: "QUADRO DE INSPETORES", value: g.quadroInspetores || "—" },
        { icon: "graduation-cap", label: "ENSINO INTEGRAL", value: g.ensinoIntegral || "—" },
        { icon: "heart", label: "UEI", value: g.uei || "—" },
        { icon: "moon", label: "SONINHO DO PRÉ", value: g.soninhoPre || "—" },
        { icon: "bus", label: "ÔNIBUS ESCOLAR", value: g.onibusEscolar || "—" },
        { icon: "door-open", label: "PORTÕES", value: g.portoes || "—" },
        { icon: "home", label: "PÚBLICO ATENDIDO", value: g.publicoAtendido || "—" }
    ];

    return `
    <div class="pdf-page">
        <div class="pdf-topbar">
            <span class="pdf-kicker">${PDF_KICKER}</span>
            <span class="pdf-page-info">PÁG. ${pageNumStr} / ${totalStr}</span>
        </div>

        <div class="pdf-header-row">
            <div class="pdf-header-text">
                <div class="pdf-ficha-label">FICHA DA UNIDADE</div>
                <div class="pdf-school-title">${escola.nome || ""}</div>
                <div class="pdf-subtitle">Índices de 0 a 5 · cores do crítico ao excelente</div>
                <div class="pdf-code-line">${escola.codigo || ""} · ${escola.regional || ""}</div>
            </div>
            ${pdfScoreRing(score, status)}
        </div>

        <div class="pdf-section-label">CARACTERÍSTICAS GERAIS</div>
        <div class="pdf-geral-cards">
            ${geralItems
                .map(
                    it => `
                <div class="pdf-geral-card">
                    <div class="pdf-geral-icon"><i data-lucide="${it.icon}"></i></div>
                    <div class="pdf-geral-text">
                        <div class="pdf-geral-label">${it.label}</div>
                        <div class="pdf-geral-value">${it.value}</div>
                    </div>
                </div>`
                )
                .join("")}
        </div>

        <div class="pdf-cols">
            <div class="pdf-col">
                <div class="pdf-col-header">
                    <span class="pdf-col-title">RELAÇÕES INTERPESSOAIS</span>
                    <span class="pdf-col-scale">0 ruim · 5 muito boa</span>
                </div>
                ${(escola.relacoesInterpessoais || []).map(item => pdfBarRow(item)).join("")}
            </div>
            <div class="pdf-col">
                <div class="pdf-col-header">
                    <span class="pdf-col-title">CARACTERÍSTICAS DA ESCOLA</span>
                    <span class="pdf-col-scale">0 negativo · 5 positivo</span>
                </div>
                ${(escola.caracteristicasEscola || []).map(item => pdfBarRow(item)).join("")}
            </div>
        </div>

        <div class="pdf-sintese-block">
            <div class="pdf-sintese-title">SÍNTESE · NOTA ${scoreStr} / 5,0</div>
            <div class="pdf-sintese-text">${escola.sintese || ""}</div>
        </div>

        ${
            escola.conselho
                ? `
        <div class="pdf-conselho-block">
            <div class="pdf-conselho-title">Conselho dos Inspetores</div>
            <div class="pdf-conselho-text">"${escola.conselho}"</div>
        </div>`
                : ""
        }

        <div class="pdf-legend">
            <span class="leg"><span class="dot" style="background:#ef4444"></span>Crítico</span>
            <span class="leg"><span class="dot" style="background:#f97316"></span>Baixo</span>
            <span class="leg"><span class="dot" style="background:#eab308"></span>Regular</span>
            <span class="leg"><span class="dot" style="background:#84cc16"></span>Bom</span>
            <span class="leg"><span class="dot" style="background:#22c55e"></span>Excelente</span>
        </div>
    </div>`;
}

function gerarPDFEscola(escola) {
    if (!escola || !escola.temRelatorio) return;
    const container = document.getElementById("pdfRenderContainer");
    if (!container) return;

    container.innerHTML = gerarTemplateHTMLPDF(escola, 1, 1);
    container.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();

    const safeName = (escola.nome || "escola")
        .replace(/[^\w\-]+/g, "_")
        .slice(0, 40);
    const opt = {
        margin: 0,
        filename: `Ficha_${escola.codigo || "UE"}_${safeName}.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
            scale: 1.8,
            useCORS: true,
            backgroundColor: "#fdfaf6",
            logging: false,
            windowWidth: 794,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf()
        .set(opt)
        .from(container.children[0])
        .save()
        .then(() => {
            container.classList.add("hidden");
            container.innerHTML = "";
        })
        .catch(err => {
            console.error("Erro PDF individual:", err);
            container.classList.add("hidden");
            container.innerHTML = "";
            alert("Erro ao gerar o PDF desta escola.");
        });
}

async function gerarPDFGeral() {
    const lista = escolasComFicha();
    if (!lista.length) {
        alert("Nenhuma escola com ficha para gerar o PDF.");
        return;
    }

    const btn = document.getElementById("btnPdfGeral");
    const label = document.getElementById("btnPdfGeralLabel");
    if (btn) btn.disabled = true;
    if (label) label.textContent = "Gerando...";

    const container = document.getElementById("pdfRenderContainer");
    if (!container) {
        if (btn) btn.disabled = false;
        if (label) label.textContent = "PDF Geral";
        return;
    }
    container.classList.remove("hidden");

    const optBase = {
        margin: 0,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
            scale: 1.5,
            useCORS: true,
            backgroundColor: "#fdfaf6",
            logging: false,
            windowWidth: 794,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    try {
        let pdf = null;
        const total = lista.length;

        for (let i = 0; i < total; i++) {
            if (label) label.textContent = `Gerando ${i + 1}/${total}...`;

            const escola = lista[i];
            container.innerHTML = gerarTemplateHTMLPDF(escola, i + 1, total);
            if (window.lucide) lucide.createIcons();

            // Aguarda layout e ícones renderizarem
            await new Promise(r => setTimeout(r, 100));

            const pageEl = container.children[0];
            if (!pageEl) continue;

            const worker = html2pdf().set(optBase).from(pageEl);

            if (!pdf) {
                pdf = await worker.toPdf().get("pdf");
            } else {
                const canvas = await worker.toCanvas().get("canvas");
                const imgData = canvas.toDataURL("image/jpeg", 0.95);
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
            }
        }

        if (pdf) {
            pdf.save("RaioX_Curitiba_Retrato_das_Escolas.pdf");
        } else {
            alert("Não foi possível gerar o PDF. Tente novamente.");
        }
    } catch (err) {
        console.error("Erro ao gerar PDF geral:", err);
        alert("Erro ao gerar o PDF geral. Veja o console para detalhes.");
    } finally {
        container.classList.add("hidden");
        container.innerHTML = "";
        if (btn) btn.disabled = false;
        if (label) label.textContent = "PDF Geral";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        if (typeof ESCOLAS_DATA === "undefined" || !Array.isArray(ESCOLAS_DATA)) {
            console.error(
                "ESCOLAS_DATA não carregado. Verifique o arquivo escolas_data.js"
            );
            const grid = document.getElementById("schoolsGrid");
            if (grid) {
                grid.innerHTML =
                    '<p class="col-span-full text-center text-red-600 py-8">Erro ao carregar os dados das escolas. Verifique se o arquivo <code>escolas_data.js</code> está presente.</p>';
            }
            return;
        }

        const search = document.getElementById("searchInput");
        const regional = document.getElementById("regionalSelect");
        if (search) search.addEventListener("input", filterSchools);
        if (regional) regional.addEventListener("change", filterSchools);

        renderEscolas(todasEscolas());
        if (window.lucide) lucide.createIcons();

        console.log(
            "Raio-X Curitiba carregado:",
            ESCOLAS_DATA.length,
            "escolas,",
            escolasComFicha().length,
            "com ficha"
        );
    } catch (err) {
        console.error("Erro na inicialização:", err);
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});
