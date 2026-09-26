/**
 * SISTEMA DE DOSSIÊ DE UNIDADES ESCOLARES
 * Cálculo Ponderado conforme Diretriz Técnica:
 * - 60% Relações Interpessoais (Média dos 5 itens)
 * - 40% Características da Escola, onde 70% desta parcela corresponde a:
 *   (Materiais para Recreio, Distribuição de Funções e Estrutura Física)
 */

// Base de dados das Escolas (Exemplos integrados + mapeamento base)
const ESCOLAS_DATA = [
    {
        id: "UEBN_JOAOZINHO",
        codigo: "UEBN_EX1",
        nome: "Escola Joãozinho",
        regional: "BN - Regional Bairro Novo",
        caracteristicasGerais: {
            alunos: "≈560 (540-580)",
            ensinoIntegral: "Pré e Fundamental",
            onibusEscolar: "Não possui ônibus escolar",
            turmas: "19 todas integrais",
            uei: "Não possui UEI",
            portoes: "Indefinido", // Exemplo de divergência padronizada para Indefinido
            quadroInspetores: "Completo",
            soninhoPre: "Inspetor acompanha",
            publicoAtendido: "Comunidade em vulnerabilidade social, caracterizada como carente"
        },
        relacoesInterpessoais: [
            { item: "Inspetores x Professores", nota: 3.0, obs: "Relação com o corpo docente entre boa e regular, sem conflitos recorrentes." },
            { item: "Inspetores x Setor Pedagógico", nota: 2.7, obs: "Suporte do setor pedagógico inconsistente, oscilando entre bom e insuficiente conforme o caso." },
            { item: "Inspetores x Direção", nota: 2.3, obs: "Direção com gestão pouco dialogada; avaliação predominantemente regular a insatisfatória." },
            { item: "Inspetores x Secretaria", nota: 2.8, obs: "Relação com a secretaria estável, variando entre neutra e regular." },
            { item: "Entre os Inspetores da Unidade", nota: 4.0, obs: "Equipe coesa, com boa relação interna e cooperação no dia a dia." }
        ],
        caracteristicasEscola: [
            { item: "Segurança Externa", nota: 1.0, obs: "Entorno de risco elevado, com registro de episódio grave de violência nas proximidades do portão da escola." },
            { item: "Estrutura Física e Mobiliária", nota: 1.0, obs: "Espaço para inspetores insuficiente, apertado e com mobiliário inadequado; ausência de local de descanso adequado." },
            { item: "Materiais para Recreio", nota: 1.3, obs: "Fornecimento de materiais para recreio escasso na quase totalidade das avaliações." },
            { item: "Equilíbrio na Distribuição de Funções", nota: 1.8, obs: "Escala de pátio desgastante e pouco justa na maior parte das avaliações." },
            { item: "Auxílio Pedagógico/Direção no Recreio", nota: 1.5, obs: "Retorno da direção e do setor pedagógico em situações de conflito raro ou praticamente inexistente." },
            { item: "Inclusão com Tutores Profissionais", nota: 1.0, obs: "Carência relevante de profissional de apoio para alunos de inclusão, afetando o atendimento diário." },
            { item: "Acesso (ônibus, bicicleta, estacionamento)", nota: 2.0, obs: "Acesso à unidade limitado, sem estrutura de estacionamento interno ou ciclovia." },
            { item: "Comércio e Restaurantes no Entorno", nota: 1.0, obs: "Pouca oferta de comércio e serviços nas proximidades da escola." }
        ],
        sintese: "Equipe de inspetores coesa, mas condições estruturais e de segurança abaixo do adequado, com suporte pedagógico insuficiente.",
        conselho: "Mantenha uma postura firme com os alunos e exerça a assertividade com os professores. Recusar solicitações que extrapolam as atribuições do seu cargo é fundamental para evitar a sobrecarga de trabalho."
    },
    {
        id: "UEBN_CHIQUINHO",
        codigo: "UEBN_EX2",
        nome: "Escola Chiquinho",
        regional: "BN - Regional Bairro Novo",
        caracteristicasGerais: {
            alunos: "≈320 (300-339)",
            ensinoIntegral: "Pré e Fundamental",
            onibusEscolar: "Possui ônibus com acompanhamento",
            turmas: "10 a 13 turmas",
            uei: "Indefinido",
            portoes: "Abertura e fechamento realizados",
            quadroInspetores: "Falta cerca de 1 inspetor",
            soninhoPre: "Inspetor não acompanha",
            publicoAtendido: "Comunidade de baixa renda, em área de vulnerabilidade social"
        },
        relacoesInterpessoais: [
            { item: "Inspetores x Professores", nota: 4.5, obs: "Diálogo constante e colaborativo com o corpo docente." },
            { item: "Inspetores x Setor Pedagógico", nota: 3.5, obs: "Atendimento satisfatório às demandas cotidianas." },
            { item: "Inspetores x Direção", nota: 5.0, obs: "Gestão participativa e apoio pleno à equipe de inspetores." },
            { item: "Inspetores x Secretaria", nota: 4.5, obs: "Comunicação rápida e eficiente." },
            { item: "Entre os Inspetores da Unidade", nota: 4.0, obs: "Ambiente harmonioso de trabalho em equipe." }
        ],
        caracteristicasEscola: [
            { item: "Segurança Externa", nota: 2.0, obs: "Área externa exige atenção constante em horários de pico." },
            { item: "Estrutura Física e Mobiliária", nota: 2.5, obs: "Estrutura atende com limitações pontuais de espaço." },
            { item: "Materiais para Recreio", nota: 4.5, obs: "Bom acervo de brinquedos e jogos para o intervalo." },
            { item: "Equilíbrio na Distribuição de Funções", nota: 5.0, obs: "Distribuição equitativa e respeitosa das rotinas de pátio." },
            { item: "Auxílio Pedagógico/Direção no Recreio", nota: 3.5, obs: "Presença periódica da equipe pedagógica no recreio." },
            { item: "Inclusão com Tutores Profissionais", nota: 3.0, obs: "Atendimento de inclusão regular, necessitando de reforço." },
            { item: "Acesso (ônibus, bicicleta, estacionamento)", nota: 2.0, obs: "Linhas de transporte público próximas, estacionamento restrito." },
            { item: "Comércio e Restaurantes no Entorno", nota: 1.0, obs: "Entorno predominantemente residencial sem facilidades comerciais." }
        ],
        sintese: "Boa relação entre os setores e escala de trabalho organizada, com quadro de inspetores incompleto e infraestrutura limitada no entorno.",
        conselho: "Aproveite o excelente canal de comunicação com a direção para solicitar o suporte necessário na organização do pátio durante os horários mais movimentados."
    },
    {
        id: "UEBN_MARIAZINHA",
        codigo: "UEBN_EX3",
        nome: "Escola Mariazinha",
        regional: "BN - Regional Bairro Novo",
        caracteristicasGerais: {
            alunos: "≈570 (550-590)",
            ensinoIntegral: "Pré e Fundamental",
            onibusEscolar: "Não possui ônibus escolar",
            turmas: "17 a 20 turmas",
            uei: "Possui UEI",
            portoes: "Abertura e fechamento realizados",
            quadroInspetores: "Faltam entre 1 e 2 inspetores",
            soninhoPre: "Inspetor não acompanha",
            publicoAtendido: "Classe baixa, baixa renda"
        },
        relacoesInterpessoais: [
            { item: "Inspetores x Professores", nota: 2.8, obs: "Relações formais, exigindo maior alinhamento de rotinas." },
            { item: "Inspetores x Setor Pedagógico", nota: 3.8, obs: "Parceria efetiva na resolução de conflitos dos alunos." },
            { item: "Inspetores x Direção", nota: 3.5, obs: "Gestão receptiva às demandas operacionais." },
            { item: "Inspetores x Secretaria", nota: 4.5, obs: "Excelente integração e suporte administrativo." },
            { item: "Entre os Inspetores da Unidade", nota: 5.0, obs: "União exemplar do grupo diante dos desafios diários." }
        ],
        caracteristicasEscola: [
            { item: "Segurança Externa", nota: 1.5, obs: "Rua movimentada no entorno com sinalização restrita." },
            { item: "Estrutura Física e Mobiliária", nota: 1.0, obs: "Instalações antigas necessitando de manutenção contínua." },
            { item: "Materiais para Recreio", nota: 2.5, obs: "Quantidade razoável, porém com desgaste de uso." },
            { item: "Equilíbrio na Distribuição de Funções", nota: 4.0, obs: "Escala bem distribuída mesmo com desfalque no quadro." },
            { item: "Auxílio Pedagógico/Direção no Recreio", nota: 4.0, obs: "Equipe presente e ativa nos momentos de recreio." },
            { item: "Inclusão com Tutores Profissionais", nota: 1.0, obs: "Déficit grave de tutores para acompanhar alunos de inclusão." },
            { item: "Acesso (ônibus, bicicleta, estacionamento)", nota: 3.5, obs: "Fácil acesso por meio de transporte coletivo." },
            { item: "Comércio e Restaurantes no Entorno", nota: 3.0, obs: "Comércio variado a poucas quadras da unidade." }
        ],
        sintese: "Boa relação interna entre inspetores e suporte pedagógico consistente, com quadro incompleto e carência estrutural no atendimento à inclusão.",
        conselho: "Fortalecer o registro das ocorrências de pátio em conjunto com o setor pedagógico garante maior amparo na gestão de alunos de inclusão."
    }
];

// Mapeamento e cálculo exato conforme instrução
function calcularPontuacaoEscola(escola) {
    // 1. Média de Relações Interpessoais
    const somaRel = escola.relacoesInterpessoais.reduce((acc, curr) => acc + curr.nota, 0);
    const mediaRel = somaRel / escola.relacoesInterpessoais.length;

    // 2. Características da Escola (Separando os 3 itens prioritários com 70% do peso dos 40%)
    const itensPrioritarios = ["Materiais para Recreio", "Equilíbrio na Distribuição de Funções", "Estrutura Física e Mobiliária"];
    
    let somaPrioritarios = 0;
    let countPrioritarios = 0;
    let somaOutros = 0;
    let countOutros = 0;

    escola.caracteristicasEscola.forEach(item => {
        if (itensPrioritarios.includes(item.item)) {
            somaPrioritarios += item.nota;
            countPrioritarios++;
        } else {
            somaOutros += item.nota;
            countOutros++;
        }
    });

    const mediaPrioritarios = countPrioritarios > 0 ? somaPrioritarios / countPrioritarios : 0;
    const mediaOutros = countOutros > 0 ? somaOutros / countOutros : 0;

    // Nota de Características = 70% itens chave + 30% outros itens
    const mediaCaracteristicas = (mediaPrioritarios * 0.70) + (mediaOutros * 0.30);

    // 3. Nota Final = 60% Relações Interpessoais + 40% Características da Escola
    const notaFinal = (mediaRel * 0.60) + (mediaCaracteristicas * 0.40);
    
    return Number(notaFinal.toFixed(1));
}

// Obter Cor e Classificação do Score (0 a 5)
function getStatusClass(nota) {
    if (nota <= 1.5) return { label: "Crítico", color: "#ef4444", bgClass: "bg-red-100 text-red-800 border-red-200" };
    if (nota <= 2.5) return { label: "Baixo", color: "#f97316", bgClass: "bg-orange-100 text-orange-800 border-orange-200" };
    if (nota <= 3.4) return { label: "Regular", color: "#eab308", bgClass: "bg-yellow-100 text-yellow-800 border-yellow-200" };
    if (nota <= 4.4) return { label: "Bom", color: "#84cc16", bgClass: "bg-lime-100 text-lime-800 border-lime-200" };
    return { label: "Excelente", color: "#22c55e", bgClass: "bg-emerald-100 text-emerald-800 border-emerald-200" };
}

// Renderizar Cards de Escolas
function renderEscolas(escolas) {
    const grid = document.getElementById('schoolsGrid');
    const emptyState = document.getElementById('emptyState');
    grid.innerHTML = '';

    if (escolas.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    // Ordenação Alfabetica Obrigatoria
    const escolasOrdenadas = [...escolas].sort((a, b) => a.nome.localeCompare(b.nome));

    escolasOrdenadas.forEach(escola => {
        const score = calcularPontuacaoEscola(escola);
        const status = getStatusClass(score);

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group";
        card.innerHTML = `
            <div>
                <div class="flex items-start justify-between gap-2 mb-3">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        ${escola.codigo || 'UNIDADE'}
                    </span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${status.bgClass} border">
                        ${score} • ${status.label}
                    </span>
                </div>
                <h3 class="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition mb-1">${escola.nome}</h3>
                <p class="text-xs text-slate-500 mb-4">${escola.regional}</p>

                <div class="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-4">
                    <div class="flex justify-between"><span class="text-slate-400">Alunos:</span> <span class="font-semibold">${escola.caracteristicasGerais.alunos}</span></div>
                    <div class="flex justify-between"><span class="text-slate-400">Turmas:</span> <span class="font-semibold">${escola.caracteristicasGerais.turmas}</span></div>
                    <div class="flex justify-between"><span class="text-slate-400">Inspetores:</span> <span class="font-semibold">${escola.caracteristicasGerais.quadroInspetores}</span></div>
                </div>
            </div>

            <button onclick="openModal('${escola.id}')" class="w-full mt-2 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition flex items-center justify-center space-x-2">
                <span>Ver Ficha Completa</span>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

// Filtros de Busca e Regional
function filterSchools() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const regional = document.getElementById('regionalSelect').value;

    const filtradas = ESCOLAS_DATA.filter(escola => {
        const matchNome = escola.nome.toLowerCase().includes(query) || (escola.codigo && escola.codigo.toLowerCase().includes(query));
        const matchRegional = regional === 'todas' || escola.regional.includes(regional);
        return matchNome && matchRegional;
    });

    renderEscolas(filtradas);
}

// Abrir Modal de Detalhes no Site
function openModal(escolaId) {
    const escola = ESCOLAS_DATA.find(e => e.id === escolaId);
    if (!escola) return;

    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);

    document.getElementById('modalCode').innerText = escola.codigo || 'UNIDADE';
    document.getElementById('modalTitle').innerText = escola.nome;
    document.getElementById('modalRegional').innerText = escola.regional;
    document.getElementById('modalScoreDisplay').innerText = score + " / 5.0";
    document.getElementById('modalScoreDisplay').style.color = status.color;
    document.getElementById('modalScoreBadge').innerText = status.label;
    document.getElementById('modalScoreBadge').className = `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${status.bgClass}`;
    document.getElementById('modalSynthesis').innerText = escola.sintese;
    document.getElementById('modalAdvice').innerText = `"${escola.conselho}"`;

    // Renderizar Características Gerais
    const genGrid = document.getElementById('modalGeneralGrid');
    genGrid.innerHTML = `
        <div><span class="block text-slate-400 text-xs">Alunos</span><span class="font-semibold">${escola.caracteristicasGerais.alunos}</span></div>
        <div><span class="block text-slate-400 text-xs">Ensino Integral</span><span class="font-semibold">${escola.caracteristicasGerais.ensinoIntegral}</span></div>
        <div><span class="block text-slate-400 text-xs">Ônibus Escolar</span><span class="font-semibold">${escola.caracteristicasGerais.onibusEscolar}</span></div>
        <div><span class="block text-slate-400 text-xs">Turmas</span><span class="font-semibold">${escola.caracteristicasGerais.turmas}</span></div>
        <div><span class="block text-slate-400 text-xs">UEI</span><span class="font-semibold">${escola.caracteristicasGerais.uei}</span></div>
        <div><span class="block text-slate-400 text-xs">Portões</span><span class="font-semibold">${escola.caracteristicasGerais.portoes}</span></div>
        <div><span class="block text-slate-400 text-xs">Quadro Inspetores</span><span class="font-semibold">${escola.caracteristicasGerais.quadroInspetores}</span></div>
        <div><span class="block text-slate-400 text-xs">Soninho do Pré</span><span class="font-semibold">${escola.caracteristicasGerais.soninhoPre}</span></div>
    `;

    // Renderizar Listas com Interação de Observação Exclusiva no Site
    renderInteractiveList('modalInterpersonalList', escola.relacoesInterpessoais);
    renderInteractiveList('modalSchoolCharList', escola.caracteristicasEscola);

    document.getElementById('btnDownloadSinglePdf').onclick = () => gerarPDFEscola(escola);

    document.getElementById('schoolModal').classList.remove('hidden');
    lucide.createIcons();
}

function renderInteractiveList(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach((item, index) => {
        const status = getStatusClass(item.nota);
        const div = document.createElement('div');
        div.className = "p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 cursor-pointer hover:border-slate-300 transition";
        div.onclick = () => {
            const obsEl = document.getElementById(`${containerId}_obs_${index}`);
            if (obsEl) obsEl.classList.toggle('hidden');
        };

        div.innerHTML = `
            <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-700">${item.item}</span>
                <span class="px-2 py-0.5 rounded ${status.bgClass}">${item.nota.toFixed(1)}</span>
            </div>
            <p id="${containerId}_obs_${index}" class="text-[11px] text-slate-500 italic border-t border-slate-200/60 pt-2 leading-relaxed">
                ${item.obs}
            </p>
        `;
        container.appendChild(div);
    });
}

function closeModal() {
    document.getElementById('schoolModal').classList.add('hidden');
}

// --------------------------------------------------------------------------
// MÓDULO DE GERAÇÃO DE PDF (LAYOUT DIPLOMÁTICO / SEM OBSERVAÇÕES DETALHADAS)
// --------------------------------------------------------------------------

function gerarTemplateHTMLPDF(escola) {
    const score = calcularPontuacaoEscola(escola);
    const status = getStatusClass(score);

    return `
        <div class="pdf-page">
            <div class="pdf-header">
                <div class="pdf-title">Dossiê das Unidades Escolares</div>
                <div class="pdf-subtitle">Relatórios Técnicos de Inspetores de Escola</div>
                <div class="pdf-school-name">${escola.nome} (${escola.codigo || 'UNIDADE'})</div>
            </div>

            <!-- Dados Gerais -->
            <div class="pdf-section-title">Características Gerais</div>
            <table class="pdf-table">
                <tr>
                    <td><strong>Alunos:</strong> ${escola.caracteristicasGerais.alunos}</td>
                    <td><strong>Turmas:</strong> ${escola.caracteristicasGerais.turmas}</td>
                </tr>
                <tr>
                    <td><strong>Ensino Integral:</strong> ${escola.caracteristicasGerais.ensinoIntegral}</td>
                    <td><strong>Quadro Inspetores:</strong> ${escola.caracteristicasGerais.quadroInspetores}</td>
                </tr>
                <tr>
                    <td><strong>Ônibus Escolar:</strong> ${escola.caracteristicasGerais.onibusEscolar}</td>
                    <td><strong>UEI:</strong> ${escola.caracteristicasGerais.uei}</td>
                </tr>
                <tr>
                    <td><strong>Abertura/Fechamento Portões:</strong> ${escola.caracteristicasGerais.portoes}</td>
                    <td><strong>Soninho do Pré:</strong> ${escola.caracteristicasGerais.soninhoPre}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Público Atendido:</strong> ${escola.caracteristicasGerais.publicoAtendido}</td>
                </tr>
            </table>

            <!-- Relações Interpessoais (Sem observação textual, conforme especificação) -->
            <div class="pdf-section-title">Relações Interpessoais (Índices de 0 a 5)</div>
            <table class="pdf-table">
                <thead>
                    <tr><th>Item Avaliado</th><th style="width: 80px; text-align: center;">Nota</th></tr>
                </thead>
                <tbody>
                    ${escola.relacoesInterpessoais.map(item => `
                        <tr>
                            <td>${item.item}</td>
                            <td style="text-align: center; font-weight: bold;">${item.nota.toFixed(1)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- Pontuação da Escola (Posicionada Estruturalmente Abaixo de Relações Interpessoais) -->
            <div style="background-color: #f8fafc; border: 2px solid #e2e8f0; padding: 10px; text-align: center; margin-bottom: 15px; border-radius: 6px;">
                <span style="font-size: 9pt; font-weight: bold; color: #475569; text-transform: uppercase;">PONTUAÇÃO SÍNTESE DA UNIDADE</span>
                <div style="font-size: 18pt; font-weight: bold; color: ${status.color}; margin: 2px 0;">${score} de 5.0</div>
                <div style="font-size: 8pt; color: #64748b; margin-top: 2px;">${escola.sintese}</div>
            </div>

            <!-- Características da Escola (Sem observação textual) -->
            <div class="pdf-section-title">Características da Escola (Índices de 0 a 5)</div>
            <table class="pdf-table">
                <thead>
                    <tr><th>Item Avaliado</th><th style="width: 80px; text-align: center;">Nota</th></tr>
                </thead>
                <tbody>
                    ${escola.caracteristicasEscola.map(item => `
                        <tr>
                            <td>${item.item}</td>
                            <td style="text-align: center; font-weight: bold;">${item.nota.toFixed(1)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- Conselho Profissional dos Inspetores -->
            <div style="margin-top: 15px; background-color: #fffbeb; border: 1px solid #fef3c7; padding: 10px; border-radius: 6px;">
                <div style="font-size: 8.5pt; font-weight: bold; color: #92400e; text-transform: uppercase; margin-bottom: 4px;">
                    Conselho dos Inspetores de Escola:
                </div>
                <div style="font-size: 8pt; color: #78350f; font-style: italic; leading-height: 1.3;">
                    "${escola.conselho}"
                </div>
            </div>
        </div>
    `;
}

// Download PDF Individual
function gerarPDFEscola(escola) {
    const container = document.getElementById('pdfRenderContainer');
    container.innerHTML = gerarTemplateHTMLPDF(escola);

    const opt = {
        margin:       0,
        filename:     `Ficha_${escola.nome.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container.children[0]).save();
}

// Download PDF Geral (A-Z)
function gerarPDFGeral() {
    const container = document.getElementById('pdfRenderContainer');
    container.innerHTML = '';

    // Ordenação Alfabetica Obrigatoria
    const escolasOrdenadas = [...ESCOLAS_DATA].sort((a, b) => a.nome.localeCompare(b.nome));

    let htmlCompleto = '';
    escolasOrdenadas.forEach(escola => {
        htmlCompleto += gerarTemplateHTMLPDF(escola);
    });

    container.innerHTML = htmlCompleto;

    const opt = {
        margin:       0,
        filename:     `Dossie_Geral_Unidades_Escolares.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save();
}

// Event Listeners e Inicialização
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchInput').addEventListener('input', filterSchools);
    document.getElementById('regionalSelect').addEventListener('change', filterSchools);
    renderEscolas(ESCOLAS_DATA);
});
