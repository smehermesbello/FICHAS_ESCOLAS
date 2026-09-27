/**
 * Dossiê Unidades Escolares — lógica de processamento
 * Dados: escolas_data.js
 * PDF: layout idêntico ao dossiê (barras segmentadas, badge circular, cards gerais)
 */

function calcularPontuacaoEscola(escola) {
    if (!escola.temRelatorio) return null;
    const relValid = (escola.relacoesInterpessoais || []).filter(i => i.nota != null && !isNaN(i.nota));
    if (!relValid.length) return null;
    const mediaRel = relValid.reduce((a, c) => a + c.nota, 0) / relValid.length;

    const prioritarios = [
        "Materiais para Recreio",
        "Equilíbrio na Distribuição de Funções",
        "Estrutura Física e Mobiliária"
    ];
    let sp = 0, cp = 0, so = 0, co = 0;
    (escola.caracteristicasEscola || []).forEach(item => {
        if (item.nota == null || isNaN(item.nota)) return;
        if (prioritarios.includes(item.item)) { sp += item.nota; cp++; }
        else { so += item.nota; co++; }
    });
    const mediaPri = cp ? sp / cp : 0;
    const mediaOut = co ? so / co : 0;
    const mediaCar = (mediaPri * 0.70) + (mediaOut * 0.30);
    return Number(((mediaRel * 0.60) + (mediaCar * 0.40)).toFixed(1));
}

function getStatusClass(nota) {
    if (nota == null || isNaN(nota)) return { label: "—", color: "#78716c", bgClass: "bg-stone-100 text-stone-600 border-stone-200", bar: "#a8a29e" };
    if (nota <= 1.5) return { label: "Baixo", color: "#c2410c", bgClass: "bg-orange-100 text-orange-800 border-orange-200", bar: "#ef4444", badgeLabel: "BAIXO" };
    if (nota <= 2.5) return { label: "Baixo", color: "#ea580c", bgClass: "bg-orange-100 text-orange-800 border-orange-200", bar: "#f97316", badgeLabel: "BAIXO" };
    if (nota <= 3.4) return { label: "Regular", color: "#ca8a04", bgClass: "bg-yellow-100 text-yellow-800 border-yellow-200", bar: "#eab308", badgeLabel: "REGULAR" };
    if (nota <= 4.4) return { label: "Bom", color: "#65a30d", bgClass: "bg-lime-100 text-lime-800 border-lime-200", bar: "#84cc16", badgeLabel: "BOM" };
    return { label: "Excelente", color: "#16a34a", bgClass: "bg-emerald-100 text-emerald-800 border-emerald-200", bar: "#22c55e", badgeLabel: "EXCELENTE" };
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
    const filled = nota == null ? 0 : Math.round((nota / 5) * maxSeg);
    const color = barColor(nota);
    let html = '';
    for (let i = 0; i < maxSeg; i++) {
        const bg = i < filled ? color : "#e7e5e4";
        html += `<span class="seg" style="background:${bg}"></span>`;
    }
    return html;
}

function escolasComFicha() {
    return (typeof ESCOLAS_DATA !== 'undefined' ? ESCOLAS_DATA : [])
        .filter(e => e.temRelatorio)
        .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
}

function renderEscolas(lista) {
    const grid = document.getElementById('schoolsGrid');
    const emptyState = document.getElementById('emptyState');
    const countEl = document.getElementById('schoolCount');
    if (!grid) return;
    grid.innerHTML = '';

    if (!lista.length) {
        if (emptyState) emptyState.classList.remove('hidden');
        if (countEl) countEl.textContent = '0 unidades';
        return;
    }
    if (emptyState) emptyState.classList.add('hidden');
    if (countEl) countEl.textContent = lista.length + ' unidade' + (lista.length !== 1 ? 's' : '');

    lista.forEach(escola => {
        const score = calcularPontuacaoEscola(escola);
        const status = getStatusClass(score);
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'school-tile group text-left bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500';
        card.onclick = () => openModal(escola.id);
        card.innerHTML = `
            <div class="flex items-start justify-between gap-2 mb-2">
                <span class="text-[10px] font-bold tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">${escola.codigo}</span>
                <span class="text-[11px] font-bold ${status.bgClass} px-2 py-0.5 rounded-full border">${score != null ? score.toFixed(1) : '—'}</span>
            </div>
            <h3 class="text-sm font-semibold text-stone-800 group-hover:text-amber-700 leading-snug line-clamp-3">${escola.nome}</h3>
        `;
        grid.appendChild(card);
    });
}

function filterSchools() {
    const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const regional = document.getElementById('regionalSelect')?.value || 'todas';
    let lista = escolasComFicha();
    if (query) {
        lista = lista.filter(e =>
            e.nome.toLowerCase().includes(query) ||
            (e.codigo && e.codigo.toLowerCase().includes(query))
        );
    }
    if (regional !== 'todas') {
        lista = lista.filter(e => (e.regional || '').includes(regional));
    }
    renderEscolas(lista);
}

function openModal(escolaId) {
    const escola = ESCOLAS_DATA.find(e => e.id === escolaId);
    if (!escola || !escola.temRelatorio) return;

    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);

    document.getElementById('modalCode').innerText = escola.codigo || '';
    document.getElementById('modalTitle').innerText = escola.nome;
    document.getElementById('modalRegional').innerText = escola.regional || '';
    document.getElementById('modalScoreDisplay').innerText = score != null ? score.toFixed(1) + ' / 5,0' : '—';
    document.getElementById('modalScoreDisplay').style.color = status.color;
    document.getElementById('modalScoreBadge').innerText = status.label;
    document.getElementById('modalScoreBadge').className = `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${status.bgClass}`;
    document.getElementById('modalSynthesis').innerText = escola.sintese || '';
    document.getElementById('modalAdvice').innerText = escola.conselho ? `"${escola.conselho}"` : '';

    const g = escola.caracteristicasGerais || {};
    document.getElementById('modalGeneralGrid').innerHTML = [
        ['Alunos', g.alunos], ['Turmas', g.turmas], ['Inspetores', g.quadroInspetores],
        ['Ensino Integral', g.ensinoIntegral], ['UEI', g.uei], ['Soninho do Pré', g.soninhoPre],
        ['Ônibus Escolar', g.onibusEscolar], ['Portões', g.portoes]
    ].map(([k, v]) => `
        <div>
            <span class="block text-stone-400 text-[11px] uppercase tracking-wide">${k}</span>
            <span class="font-semibold text-sm">${v || '—'}</span>
        </div>
    `).join('');

    renderScoreBars('modalInterpersonalList', escola.relacoesInterpessoais || []);
    renderScoreBars('modalSchoolCharList', escola.caracteristicasEscola || []);

    document.getElementById('btnDownloadSinglePdf').onclick = () => gerarPDFEscola(escola);
    document.getElementById('schoolModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
}

function renderScoreBars(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach((item, index) => {
        const status = getStatusClass(item.nota);
        const notaStr = item.nota != null ? item.nota.toFixed(1).replace('.', ',') : '—';
        const color = barColor(item.nota);
        const filled = item.nota == null ? 0 : Math.round((item.nota / 5) * 5);
        let segs = '';
        for (let i = 0; i < 5; i++) {
            segs += `<span class="inline-block h-2 w-5 rounded-sm mr-0.5" style="background:${i < filled ? color : '#e7e5e4'}"></span>`;
        }
        const div = document.createElement('div');
        div.className = 'p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-2 cursor-pointer hover:border-amber-300 transition';
        div.onclick = () => {
            const obs = document.getElementById(`${containerId}_obs_${index}`);
            if (obs) obs.classList.toggle('hidden');
        };
        div.innerHTML = `
            <div class="flex items-center justify-between text-xs font-semibold gap-2">
                <span class="text-stone-700 leading-tight">${item.item}</span>
                <span class="font-bold shrink-0" style="color:${color}">${notaStr}</span>
            </div>
            <div class="flex items-center">${segs}</div>
            <p id="${containerId}_obs_${index}" class="hidden text-[11px] text-stone-500 italic border-t border-stone-200/60 pt-2 leading-relaxed">
                ${item.obs || 'Sem observação detalhada.'}
            </p>`;
        container.appendChild(div);
    });
}

function closeModal() {
    document.getElementById('schoolModal').classList.add('hidden');
    document.body.style.overflow = '';
}

/* ========== PDF idêntico ao dossiê ========== */
function pdfBarRow(item, labels) {
    const n = item.nota;
    const notaStr = n != null ? n.toFixed(1).replace('.', ',') : '—';
    const color = barColor(n);
    const filled = n == null ? 0 : Math.round((n / 5) * 5);
    let segs = '';
    for (let i = 0; i < 5; i++) {
        segs += `<span class="pdf-seg" style="background:${i < filled ? color : '#e7e5e4'}"></span>`;
    }
    const leftLabel = labels?.left || '0';
    const rightLabel = labels?.right || '5';
    return `
        <div class="pdf-metric">
            <div class="pdf-metric-top">
                <span class="pdf-metric-name">${item.item}</span>
                <span class="pdf-metric-nota" style="color:${color}">${notaStr}</span>
            </div>
            <div class="pdf-segs">${segs}</div>
            <div class="pdf-metric-scale"><span>${leftLabel}</span><span>${rightLabel}</span></div>
        </div>`;
}

function gerarTemplateHTMLPDF(escola) {
    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);
    const g = escola.caracteristicasGerais || {};
    const scoreStr = score != null ? score.toFixed(1).replace('.', ',') : '—';
    const pageNum = '01';

    const geralItems = [
        { icon: '👥', label: 'ALUNOS', value: g.alunos || '—' },
        { icon: '📚', label: 'TURMAS', value: g.turmas || '—' },
        { icon: '👤', label: 'QUADRO DE INSPETORES', value: g.quadroInspetores || '—' },
        { icon: '🎓', label: 'ENSINO INTEGRAL', value: g.ensinoIntegral || '—' },
        { icon: '❤️', label: 'UEI', value: g.uei || '—' },
        { icon: '🌙', label: 'SONINHO DO PRÉ', value: g.soninhoPre || '—' },
        { icon: '🚌', label: 'ÔNIBUS ESCOLAR', value: g.onibusEscolar || '—' },
        { icon: '🚪', label: 'PORTÕES', value: g.portoes || '—' },
        { icon: '🏘️', label: 'PÚBLICO ATENDIDO', value: g.publicoAtendido || '—' },
    ];

    const relLabels = [
        { left: '0 · ruim', right: '5 · muito boa' },
        { left: '0 · ruim', right: '5 · muito boa' },
        { left: '0 · ruim', right: '5 · muito boa' },
        { left: '0 · ruim', right: '5 · muito boa' },
        { left: '0 · ruim', right: '5 · muito boa' },
    ];
    const carLabelsMap = {
        'Segurança Externa': { left: '0 · perigoso', right: '5 · seguro' },
        'Estrutura Física e Mobiliária': { left: '0 · inadequada', right: '5 · adequada' },
        'Materiais para Recreio': { left: '0 · pouco', right: '5 · muito' },
        'Equilíbrio na Distribuição de Funções': { left: '0 · desigual', right: '5 · equilibrado' },
        'Auxílio Pedagógico/Direção no Recreio': { left: '0 · ruim', right: '5 · ótimo' },
        'Inclusão com Tutores Profissionais': { left: '0 · poucos', right: '5 · todos' },
        'Acesso (ônibus, bicicleta, estacionamento)': { left: '0 · pouco acessível', right: '5 · muito acessível' },
        'Comércio e Restaurantes no Entorno': { left: '0 · nada', right: '5 · bastante' },
        'Público atendido': { left: '0 · carente', right: '5 · abastado' },
    };

    return `
    <div class="pdf-page">
        <div class="pdf-topbar">
            <span class="pdf-kicker">DOSSIÊ DAS UNIDADES · RELATÓRIOS DE INSPETORES</span>
            <span class="pdf-page-info">PÁG. ${pageNum} / <strong style="color:${status.color};font-size:14pt">${scoreStr}</strong><br><span style="font-size:7pt;color:#a8a29e">DE 5,0<br>${status.badgeLabel || status.label.toUpperCase()}</span></span>
        </div>

        <div class="pdf-ficha-label">FICHA DA UNIDADE</div>
        <div class="pdf-school-title">${escola.nome}</div>
        <div class="pdf-subtitle">Índices de 0 a 5 · cores do crítico ao excelente</div>
        <div class="pdf-code-line">${escola.codigo} · ${escola.regional || ''}</div>

        <div class="pdf-section-label">CARACTERÍSTICAS GERAIS</div>
        <div class="pdf-geral-cards">
            ${geralItems.map(it => `
                <div class="pdf-geral-card">
                    <div class="pdf-geral-label">${it.label}</div>
                    <div class="pdf-geral-value">${it.value}</div>
                </div>
            `).join('')}
        </div>

        <div class="pdf-cols">
            <div class="pdf-col">
                <div class="pdf-col-header">
                    <span class="pdf-col-title">RELAÇÕES INTERPESSOAIS</span>
                    <span class="pdf-col-scale">0 ruim · 5 muito boa</span>
                </div>
                ${(escola.relacoesInterpessoais || []).map((item, i) => pdfBarRow(item, relLabels[i])).join('')}
            </div>
            <div class="pdf-col">
                <div class="pdf-col-header">
                    <span class="pdf-col-title">CARACTERÍSTICAS DA ESCOLA</span>
                    <span class="pdf-col-scale">0 negativo · 5 positivo</span>
                </div>
                ${(escola.caracteristicasEscola || []).map(item => {
                    const lab = carLabelsMap[item.item] || { left: '0', right: '5' };
                    return pdfBarRow(item, lab);
                }).join('')}
            </div>
        </div>

        <div class="pdf-sintese-block">
            <div class="pdf-sintese-title">SÍNTESE · NOTA ${scoreStr} / 5,0</div>
            <div class="pdf-sintese-text">${escola.sintese || ''}</div>
        </div>

        ${escola.conselho ? `
        <div class="pdf-conselho-block">
            <div class="pdf-conselho-title">Conselho dos Inspetores</div>
            <div class="pdf-conselho-text">"${escola.conselho}"</div>
        </div>` : ''}

        <div class="pdf-legend">
            <span class="leg" style="background:#fee2e2;color:#b91c1c">● Crítico</span>
            <span class="leg" style="background:#ffedd5;color:#c2410c">● Baixo</span>
            <span class="leg" style="background:#fef9c3;color:#a16207">● Regular</span>
            <span class="leg" style="background:#ecfccb;color:#4d7c0f">● Bom</span>
            <span class="leg" style="background:#d1fae5;color:#047857">● Excelente</span>
        </div>
    </div>`;
}

function gerarPDFEscola(escola) {
    if (!escola.temRelatorio) return;
    const container = document.getElementById('pdfRenderContainer');
    container.innerHTML = gerarTemplateHTMLPDF(escola);
    container.classList.remove('hidden');
    const opt = {
        margin: 0,
        filename: `Ficha_${escola.codigo}_${escola.nome.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#fdfaf6' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(container.children[0]).save().then(() => {
        container.classList.add('hidden');
        container.innerHTML = '';
    });
}

function gerarPDFGeral() {
    const lista = escolasComFicha();
    const container = document.getElementById('pdfRenderContainer');
    container.innerHTML = lista.map(gerarTemplateHTMLPDF).join('');
    container.classList.remove('hidden');
    const opt = {
        margin: 0,
        filename: 'Dossie_Geral_Unidades_Escolares.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#fdfaf6' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };
    html2pdf().set(opt).from(container).save().then(() => {
        container.classList.add('hidden');
        container.innerHTML = '';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('searchInput');
    const regional = document.getElementById('regionalSelect');
    if (search) search.addEventListener('input', filterSchools);
    if (regional) regional.addEventListener('change', filterSchools);
    renderEscolas(escolasComFicha());
    if (window.lucide) lucide.createIcons();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
Ajuste códigos escolas ficha PDF estética site - Grok
