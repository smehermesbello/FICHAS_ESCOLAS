/**
 * Dossiê Unidades Escolares
 * Aplicação Principal - Processamento, Renderização e PDF.
 */

// Cálculo da Pontuação Global (60% Relações Interpessoais + 40% Características)
function calcularPontuacaoEscola(escola) {
    if (typeof escola.notaOficial === 'number') {
        return Number(escola.notaOficial.toFixed(1));
    }
    if (!escola.relacoesInterpessoais || !escola.relacoesInterpessoais.length) {
        return null;
    }

    const relValid = escola.relacoesInterpessoais.filter(i => i.nota != null && !isNaN(i.nota));
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

// Retorna classes de estilo, rótulos e cores baseados na nota
function getStatusClass(nota) {
    if (nota == null || isNaN(nota)) {
        return { label: "Sem relatório", color: "#78716c", bgClass: "bg-stone-100 text-stone-600 border-stone-200", bar: "#a8a29e" };
    }
    if (nota <= 1.5) return { label: "Crítico", color: "#dc2626", bgClass: "bg-red-100 text-red-800 border-red-200", bar: "#ef4444" };
    if (nota <= 2.5) return { label: "Baixo", color: "#ea580c", bgClass: "bg-orange-100 text-orange-800 border-orange-200", bar: "#f97316" };
    if (nota <= 3.4) return { label: "Regular", color: "#ca8a04", bgClass: "bg-yellow-100 text-yellow-800 border-yellow-200", bar: "#eab308" };
    if (nota <= 4.4) return { label: "Bom", color: "#65a30d", bgClass: "bg-lime-100 text-lime-800 border-lime-200", bar: "#84cc16" };
    return { label: "Excelente", color: "#16a34a", bgClass: "bg-emerald-100 text-emerald-800 border-emerald-200", bar: "#22c55e" };
}

function barWidth(nota) {
    if (nota == null || isNaN(nota)) return 0;
    return Math.max(0, Math.min(100, (nota / 5) * 100));
}

// Renderiza na Home as escolas que TÊM ficha (grade de 4 colunas)
function renderEscolas(escolas) {
    const grid = document.getElementById('schoolsGrid');
    const emptyState = document.getElementById('emptyState');
    const countEl = document.getElementById('schoolCount');
    if (!grid) return;

    grid.innerHTML = '';

    // Filtra para exibir APENAS as escolas que possuem ficha/relatório
    const escolasComFicha = (escolas || []).filter(e => 
        e.temRelatorio === true || 
        (Array.isArray(e.relacoesInterpessoais) && e.relacoesInterpessoais.length > 0)
    );

    if (escolasComFicha.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        if (countEl) countEl.textContent = '0 unidades';
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (countEl) countEl.textContent = `${escolasComFicha.length} unidade${escolasComFicha.length !== 1 ? 's com ficha' : ' com ficha'}`;

    // Garante que o container use grade de 4 colunas em telas médias/grandes
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

    const ordenadas = [...escolasComFicha].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

    ordenadas.forEach(escola => {
        const score = calcularPontuacaoEscola(escola);
        const status = getStatusClass(score);

        const card = document.createElement('div');
        card.className = "school-card bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer";
        card.onclick = () => openModal(escola.id);

        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 truncate">${escola.codigo || escola.id}</span>
                    <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${status.bgClass} border whitespace-nowrap">${score !== null ? score.toFixed(1) : '—'}</span>
                </div>
                <h3 class="text-base font-bold text-stone-800 group-hover:text-amber-700 transition mb-1 leading-snug line-clamp-2">${escola.nome}</h3>
                <p class="text-xs text-stone-500 mb-3">${escola.regional || ''}</p>
            </div>
            <div class="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Ver Ficha Completa</span>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </div>
        `;
        grid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

// Filtro de Busca na Home
function filterSchools() {
    if (typeof ESCOLAS_DATA === 'undefined') return;
    const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const statusFilter = document.getElementById('statusSelect')?.value || 'todas';
    const regionalFilter = document.getElementById('regionalSelect')?.value || 'todas';

    const filtradas = ESCOLAS_DATA.filter(escola => {
        const matchNome = !query ||
            escola.nome.toLowerCase().includes(query) ||
            (escola.codigo && escola.codigo.toLowerCase().includes(query));
        if (!matchNome) return false;
        if (regionalFilter !== 'todas' && !(escola.regional || '').includes(regionalFilter)) return false;
        if (statusFilter === 'todas') return true;
        const score = calcularPontuacaoEscola(escola);
        return getStatusClass(score).label.toLowerCase() === statusFilter;
    });

    renderEscolas(filtradas);
}

// Abertura da Ficha / Modal da Escola
function openModal(escolaId) {
    if (typeof ESCOLAS_DATA === 'undefined') return;
    const escola = ESCOLAS_DATA.find(e => e.id === escolaId);
    if (!escola) return;

    const modalCode = document.getElementById('modalCode');
    const modalTitle = document.getElementById('modalTitle');
    const modalRegional = document.getElementById('modalRegional');
    if (modalCode) modalCode.innerText = escola.codigo || 'UNIDADE';
    if (modalTitle) modalTitle.innerText = escola.nome;
    if (modalRegional) modalRegional.innerText = escola.regional || '';

    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);

    const scoreDisplay = document.getElementById('modalScoreDisplay');
    const scoreBadge = document.getElementById('modalScoreBadge');
    const synthesisEl = document.getElementById('modalSynthesis');
    const adviceEl = document.getElementById('modalAdvice');

    if (scoreDisplay) {
        scoreDisplay.innerText = score !== null ? score.toFixed(1) + " / 5,0" : "—";
        scoreDisplay.style.color = status.color;
    }
    if (scoreBadge) {
        scoreBadge.innerText = status.label;
        scoreBadge.className = `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${status.bgClass}`;
    }
    if (synthesisEl) synthesisEl.innerText = escola.sintese || 'Sem síntese registrada.';
    if (adviceEl) adviceEl.innerText = escola.conselho ? `"${escola.conselho}"` : 'Sem conselho registrado.';

    const g = escola.caracteristicasGerais || {};
    const generalGrid = document.getElementById('modalGeneralGrid');
    if (generalGrid) {
        generalGrid.innerHTML = `
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Alunos</span><span class="font-semibold text-sm text-stone-800">${g.alunos || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Turmas</span><span class="font-semibold text-sm text-stone-800">${g.turmas || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Inspetores</span><span class="font-semibold text-sm text-stone-800">${g.quadroInspetores || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Ensino Integral</span><span class="font-semibold text-sm text-stone-800">${g.ensinoIntegral || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">UEI</span><span class="font-semibold text-sm text-stone-800">${g.uei || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Soninho Pré</span><span class="font-semibold text-sm text-stone-800">${g.soninhoPre || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Ônibus Escolar</span><span class="font-semibold text-sm text-stone-800">${g.onibusEscolar || '—'}</span></div>
            <div><span class="block text-stone-400 text-[11px] uppercase tracking-wide">Portões</span><span class="font-semibold text-sm text-stone-800">${g.portoes || '—'}</span></div>
        `;
    }

    renderScoreBars('modalInterpersonalList', escola.relacoesInterpessoais || []);
    renderScoreBars('modalSchoolCharList', escola.caracteristicasEscola || []);

    const btnPdf = document.getElementById('btnDownloadSinglePdf');
    if (btnPdf) {
        btnPdf.onclick = () => gerarPDFEscola(escola);
    }

    const modal = document.getElementById('schoolModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    if (window.lucide) lucide.createIcons();
}

// Renderização das barras com notas e comentários sanfonados
function renderScoreBars(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    items.forEach((item, index) => {
        const status = getStatusClass(item.nota);
        const w = barWidth(item.nota);
        const notaStr = item.nota != null ? item.nota.toFixed(1) : '—';
        const div = document.createElement('div');
        div.className = "p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-2 cursor-pointer hover:border-amber-300 transition";
        div.onclick = () => {
            const obsEl = document.getElementById(`${containerId}_obs_${index}`);
            if (obsEl) obsEl.classList.toggle('hidden');
        };
        div.innerHTML = `
            <div class="flex items-center justify-between text-xs font-semibold gap-2">
                <span class="text-stone-700 leading-tight">${item.item}</span>
                <span class="px-2 py-0.5 rounded ${status.bgClass} shrink-0">${notaStr}</span>
            </div>
            <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all" style="width:${w}%;background:${status.bar}"></div>
            </div>
            <p id="${containerId}_obs_${index}" class="hidden text-[11px] text-stone-500 italic border-t border-stone-200/60 pt-2 leading-relaxed">
                ${item.obs || 'Sem observação detalhada.'}
            </p>`;
        container.appendChild(div);
    });
}

function closeModal() {
    const modal = document.getElementById('schoolModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Template HTML de exportação para PDF
function gerarTemplateHTMLPDF(escola) {
    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);
    const g = escola.caracteristicasGerais || {};

    const barRow = (item) => {
        const st = getStatusClass(item.nota);
        const w = barWidth(item.nota);
        const n = item.nota != null ? item.nota.toFixed(1) : '—';
        return `
            <div class="pdf-bar-row mb-2">
                <div class="flex justify-between text-xs font-semibold mb-1">
                    <span>${item.item}</span>
                    <span style="color:${st.color}">${n}</span>
                </div>
                <div style="height:6px;background:#e7e5e4;border-radius:3px;overflow:hidden">
                    <div style="height:100%;width:${w}%;background:${st.bar}"></div>
                </div>
            </div>`;
    };

    return `
        <div class="pdf-page p-8 bg-white font-sans text-stone-800">
            <div class="flex justify-between items-start border-b pb-4 mb-6">
                <div>
                    <span class="text-xs text-amber-700 font-bold uppercase">Dossiê das Unidades Escolraes</span>
                    <h1 class="text-2xl font-bold text-stone-900">${escola.nome}</h1>
                    <p class="text-sm text-stone-500">${escola.codigo} · ${escola.regional || ''}</p>
                </div>
                <div class="text-right">
                    <div class="text-3xl font-extrabold" style="color:${status.color}">${score !== null ? score.toFixed(1) : '—'}</div>
                    <div class="text-xs font-bold uppercase" style="color:${status.color}">${status.label}</div>
                </div>
            </div>

            <h3 class="text-sm font-bold uppercase text-stone-400 mb-2">Características Gerais</h3>
            <div class="grid grid-cols-4 gap-3 bg-stone-50 p-4 rounded-xl text-xs mb-6 border">
                <div><span class="text-stone-400 block">Alunos</span><strong>${g.alunos || '—'}</strong></div>
                <div><span class="text-stone-400 block">Turmas</span><strong>${g.turmas || '—'}</strong></div>
                <div><span class="text-stone-400 block">Inspetores</span><strong>${g.quadroInspetores || '—'}</strong></div>
                <div><span class="text-stone-400 block">Integral</span><strong>${g.ensinoIntegral || '—'}</strong></div>
            </div>

            <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h3 class="text-sm font-bold uppercase text-stone-400 mb-3">Relações Interpessoais</h3>
                    ${(escola.relacoesInterpessoais || []).map(barRow).join('')}
                </div>
                <div>
                    <h3 class="text-sm font-bold uppercase text-stone-400 mb-3">Características da Escola</h3>
                    ${(escola.caracteristicasEscola || []).map(barRow).join('')}
                </div>
            </div>

            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4 text-xs">
                <strong class="block text-amber-900 mb-1">Síntese</strong>
                <p class="text-amber-800">${escola.sintese || 'Sem síntese disponível.'}</p>
            </div>

            <div class="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
                <strong class="block text-stone-700 mb-1">Conselho dos Inspetores</strong>
                <p class="text-stone-600 italic">"${escola.conselho || 'Sem conselho registrado.'}"</p>
            </div>
        </div>`;
}

// Download PDF Individual
function gerarPDFEscola(escola) {
    if (typeof html2pdf === 'undefined') {
        alert('Biblioteca PDF não carregada.');
        return;
    }
    const container = document.createElement('div');
    container.innerHTML = gerarTemplateHTMLPDF(escola);
    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: `Ficha_${escola.codigo || 'Escola'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save().then(() => {
        document.body.removeChild(container);
    });
}

// Event Listeners e Inicialização
document.addEventListener('DOMContentLoaded', () => {
    ['searchInput', 'statusSelect', 'regionalSelect'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(id === 'searchInput' ? 'input' : 'change', filterSchools);
    });

    if (typeof ESCOLAS_DATA !== 'undefined') {
        renderEscolas(ESCOLAS_DATA);
    }
    if (window.lucide) lucide.createIcons();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
