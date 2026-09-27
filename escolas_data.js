const ESCOLAS_DATA = [
  {
    "id": "UE_AYRTON_SENNA_DA_SILVA",
    "codigo": "UE_AYRTON_SENNA_DA_SILVA",
    "nome": "Ayrton Senna da Silva",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 570 (variação: 550–590)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.5,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.2,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.5,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.8,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.0,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.8,
        "obs": "A oferta de comércio no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos indicam ausência de regras claras por parte da direção, estrutura física limitada e escassez de materiais. Por outro lado, os alunos são descritos como receptivos e respeitosos, sendo o comportamento de alguns professores a maior fonte de desgaste relatada.",
    "notaOficial": 3.5
  },
  {
    "id": "UE_BELMIRO_CESAR",
    "codigo": "UE_BELMIRO_CESAR",
    "nome": "Belmiro Cesar",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "500",
      "turmas": "11",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "É relatado um caso pontual de assiduidade irregular de uma colega, com o registro de ponto mantido normalmente pela direção. Fora essa situação específica, não há outras queixas relevantes. A recomendação é considerar a vaga principalmente na ausência de alternativas mais adequadas no momento.",
    "notaOficial": 4.1
  },
  {
    "id": "UE_BOLESLAU_FALARZ",
    "codigo": "UE_BOLESLAU_FALARZ",
    "nome": "Boleslau Falarz",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "300",
      "turmas": "16",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 4.0,
        "obs": "O suporte à inclusão com profissionais de apoio considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "O relato menciona indisciplina e questões emocionais entre os alunos como pontos de atenção, sem detalhar outros aspectos negativos relacionados à direção, à comunidade ou à equipe. A avaliação geral do respondente é muito positiva, descrevendo a experiência de trabalho na unidade como excelente e recomendável.",
    "notaOficial": 4.4
  },
  {
    "id": "UE_CERRO_AZUL",
    "codigo": "UE_CERRO_AZUL",
    "nome": "Cerro Azul",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "376",
      "turmas": "13",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 1.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A unidade recebe uma demanda expressiva de alunos de inclusão, com salas numerosas, e a comunidade tem grande proximidade com a escola, registrando reclamações com frequência. A direção é bem avaliada, embora tenda a concentrar funções na equipe. Recomenda-se postura firme e capacidade de se posicionar.",
    "notaOficial": 3.5
  },
  {
    "id": "UE_CLAUDIO_ABRAMO",
    "codigo": "UE_CLAUDIO_ABRAMO",
    "nome": "Cláudio Abramo",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 412 (variação: 300–525)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.5,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.5,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.8,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.0,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.8,
        "obs": "O suporte à inclusão com profissionais de apoio classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.0,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.8,
        "obs": "A oferta de comércio no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos indicam que a direção poderia agir com mais agilidade na resolução de conflitos entre diferentes cargos. Quanto aos alunos, alguns demandam mais atenção por questões comportamentais ou de vulnerabilidade social, mas são descritos como afetuosos. A equipe é colaborativa, sendo importante saber se posicionar.",
    "notaOficial": 3.6
  },
  {
    "id": "UE_DARIO_P_DE_C_VELLOSO",
    "codigo": "UE_DARIO_P_DE_C_VELLOSO",
    "nome": "Dario P. de C. Velloso",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "450",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.5,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 2.2,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 3.8,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.5,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.2,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.8,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.0,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos indicam indisciplina entre alunos e também entre funcionários, além da percepção de favoritismo por parte da direção em relação a determinados colegas. Recomenda-se cautela ao lidar com divergências junto à gestão, evitando confrontos diretos com a direção.",
    "notaOficial": 3.4
  },
  {
    "id": "UE_DO_EXPEDICIONARIO",
    "codigo": "UE_DO_EXPEDICIONARIO",
    "nome": "Do Expedicionário",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 225 (variação: 200–250)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.5,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.5,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.5,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 2.2,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 3.0,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.5,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.0,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.2,
        "obs": "O acesso à unidade classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos são divergentes: um aponta pouca valorização da função, distanciamento entre setores e um contexto de segurança mais sensível no entorno; outro descreve a equipe como receptiva e tranquila. Um ponto positivo comum é o porte reduzido da escola, com poucos alunos.",
    "notaOficial": 3.2
  },
  {
    "id": "UE_DOM_MANUEL_DA_SILVEIRA_D_ELBOUX",
    "codigo": "UE_DOM_MANUEL_DA_SILVEIRA_D_ELBOUX",
    "nome": "Dom Manuel da Silveira D'Elboux",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "350",
      "turmas": "6 de manhã e 7 de tarde",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Apenas abertura",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "A gestão é avaliada, em geral, de forma positiva, ainda que ocasionalmente sejam feitas cobranças consideradas desproporcionais. Alguns professores solicitam apoio além das atribuições do cargo, cabendo ao inspetor avaliar até onde atender. A equipe é unida e recebe bem colegas dispostos a somar.",
    "notaOficial": 4.0
  },
  {
    "id": "UE_DONA_LULU",
    "codigo": "UE_DONA_LULU",
    "nome": "Dona Lulu",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "600",
      "turmas": "Não recordo... Lembro que era dois pré, duas classe especial... Muitas",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Sim, possui transporte, mas o inspetor NÃO acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 1.0,
        "obs": "Relação com o setor pedagógico considerada crítica, com barreiras significativas no trabalho conjunto."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.5,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "O relato descreve um ambiente de trabalho desafiador, com favoritismo por parte da direção em relação a alguns colegas, pouco apoio institucional e momentos de grande agitação durante o refeitório e a saída dos alunos. A recomendação é evitar a unidade.",
    "notaOficial": 2.5
  },
  {
    "id": "UE_DONA_POMPILIA",
    "codigo": "UE_DONA_POMPILIA",
    "nome": "Dona Pompília",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "1000",
      "turmas": "18",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte, mas o inspetor NÃO acompanha",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "Segundo o relato, os desafios enfrentados na unidade tendem a ser semelhantes aos de outras escolas, e parte das queixas estaria relacionada à postura de alguns colegas. A recomendação é manter dedicação e comprometimento com as atribuições.",
    "notaOficial": 4.2
  },
  {
    "id": "UE_DR_OSVALDO_CRUZ",
    "codigo": "UE_DR_OSVALDO_CRUZ",
    "nome": "Dr. Osvaldo Cruz",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "260",
      "turmas": "7",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Não oferta período integral",
      "uei": "Possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte, mas o inspetor NÃO acompanha",
      "portoes": "Apenas fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.5,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.5,
        "obs": "O suporte à inclusão com profissionais de apoio classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Segundo o relato, os desafios enfrentados são semelhantes aos de outras unidades, especialmente relacionados ao atendimento de alunos de inclusão. De modo geral, a escola é bem avaliada, sem outras questões relevantes destacadas pelo respondente quanto ao ambiente ou à relação com a equipe gestora.",
    "notaOficial": 3.7
  },
  {
    "id": "UE_DR_HAMILTON_CALDERARI",
    "codigo": "UE_DR_HAMILTON_CALDERARI",
    "nome": "Dr. Hamilton Calderari",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "380",
      "turmas": "16",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "Os desafios relatados são considerados típicos do dia a dia escolar, como turmas mais agitadas e alunos que exigem atenção redobrada, sem particularidades que destoem de outras unidades. Recomenda-se construir relações de confiança principalmente com os colegas mais próximos da rotina de trabalho.",
    "notaOficial": 4.1
  },
  {
    "id": "UE_ELEVIR_DIONISIO",
    "codigo": "UE_ELEVIR_DIONISIO",
    "nome": "Elevir Dionísio",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "330",
      "turmas": "7 manhã e 8 tarde",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "Prefiro não responder",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.0,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 1.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A relação com a direção é apontada como um ponto de atenção, com relatos de escuta parcial nos conflitos internos. A experiência pode variar conforme o inspetor responsável, e um novo profissional pode encontrar uma dinâmica diferente da vivenciada anteriormente.",
    "notaOficial": 3.0
  },
  {
    "id": "UE_ENY_CALDEIRA",
    "codigo": "UE_ENY_CALDEIRA",
    "nome": "Eny Caldeira",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "750",
      "turmas": "16",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.5,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato aponta indisciplina entre os alunos e reclamações frequentes por parte das famílias. Como pontos positivos, destaca-se a boa localização da escola, com fácil acesso e comércios nas proximidades, além de uma reforma geral prevista para o próximo ano, o que pode trazer melhorias estruturais.",
    "notaOficial": 3.3
  },
  {
    "id": "UE_FRANCISCO_DEROSSO",
    "codigo": "UE_FRANCISCO_DEROSSO",
    "nome": "Francisco Derosso",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "700",
      "turmas": "24",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.0,
        "obs": "O fornecimento de materiais para recreio avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.5,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os pontos de atenção relatados envolvem conflitos ocasionais entre colegas e certa interferência da comunidade no cotidiano escolar. Como orientação prática, recomenda-se manter a direção e o setor pedagógico sempre informados sobre eventuais saídas durante o horário de trabalho, mantendo a comunicação transparente com a gestão.",
    "notaOficial": 3.1
  },
  {
    "id": "UE_FRANCISCO_FRISCHMANN",
    "codigo": "UE_FRANCISCO_FRISCHMANN",
    "nome": "Francisco Frischmann",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "700",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Sim",
      "onibusEscolar": "Indefinido",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.5,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 2.5,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 4.0,
        "obs": "A segurança no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.2,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.5,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 2.5,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos indicam desafios de convivência entre a equipe, com dinâmicas de hierarquia informal entre colegas mais experientes, além de episódios de indisciplina que podem chegar à agressão física contra profissionais. O ritmo de escola integral é considerado desgastante. Recomenda-se postura firme e resiliência.",
    "notaOficial": 3.0
  },
  {
    "id": "UE_FRANCISCO_KLEMTZ",
    "codigo": "UE_FRANCISCO_KLEMTZ",
    "nome": "Francisco Klemtz",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "300",
      "turmas": "5",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 1.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato aponta a indisciplina dos estudantes como o principal desafio da unidade, sem menção a outros problemas relevantes. De modo geral, a recepção à equipe é positiva, e o novo inspetor é bem recebido, sem ressalvas adicionais quanto ao ambiente de trabalho.",
    "notaOficial": 3.3
  },
  {
    "id": "UE_GRACILIANO_RAMOS",
    "codigo": "UE_GRACILIANO_RAMOS",
    "nome": "Graciliano Ramos",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "580",
      "turmas": "20",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Não oferta período integral",
      "uei": "Possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A comunidade escolar é descrita como bastante exigente, com famílias que esperam da escola o mesmo acolhimento oferecido em casa. A unidade valoriza o cuidado e o respeito com os alunos, sendo indicada para quem se identifica com esse perfil e busca real dedicação.",
    "notaOficial": 3.9
  },
  {
    "id": "UE_HELENA_KOLODY",
    "codigo": "UE_HELENA_KOLODY",
    "nome": "Helena Kolody",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "990",
      "turmas": "19",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 2.0,
        "obs": "Relação com o setor pedagógico avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.0,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 1.0,
        "obs": "Relação com a secretaria considerada crítica, com barreiras significativas no trabalho conjunto."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.0,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "O relato aponta indisciplina pontual entre alguns alunos, gerando conflitos ocasionais, além de espaço físico limitado para atividades de recreio. Fora essas observações, não há outras questões relevantes apontadas, e o respondente recomenda a vaga, convidando o novo inspetor a somar com a equipe.",
    "notaOficial": 2.7
  },
  {
    "id": "UE_HERLEY_MEHL",
    "codigo": "UE_HERLEY_MEHL",
    "nome": "Herley Mehl",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "630",
      "turmas": "22",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 4.0,
        "obs": "O suporte à inclusão com profissionais de apoio considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "O principal desafio relatado é a indisciplina de parte dos alunos. Como orientação, destaca-se a importância de dedicar atenção especial aos estudantes de inclusão, cujo acompanhamento cuidadoso pode contribuir para reduzir conflitos e melhorar a convivência no ambiente escolar como um todo.",
    "notaOficial": 4.8
  },
  {
    "id": "UE_IRATI",
    "codigo": "UE_IRATI",
    "nome": "Irati",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "1200",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Indefinido",
      "onibusEscolar": "Indefinido",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.5,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.2,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.0,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos são divergentes: um respondente descreve a rotina como tranquila e sem grandes problemas, enquanto outro menciona dificuldades de diálogo com a direção e a percepção de tratamento desigual entre a equipe. Recomenda-se buscar mais informações antes de formar uma opinião definitiva.",
    "notaOficial": 3.6
  },
  {
    "id": "UE_ITACELINA_BITTENCOURT",
    "codigo": "UE_ITACELINA_BITTENCOURT",
    "nome": "Itacelina Bittencourt",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "390",
      "turmas": "13",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 1.5,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "O relato aponta um crescimento da indisciplina entre os alunos, associado a expectativas elevadas por parte das famílias e pouco envolvimento destas na educação dos filhos. A recomendação é aceitar a vaga com tranquilidade, desde que haja real disposição para o trabalho.",
    "notaOficial": 4.0
  },
  {
    "id": "UE_JARDIM_SANTOS_ANDRADE",
    "codigo": "UE_JARDIM_SANTOS_ANDRADE",
    "nome": "Jardim Santos Andrade",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "285",
      "turmas": "12",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.0,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 1.0,
        "obs": "Relação com os demais inspetores considerada crítica, com barreiras significativas no trabalho conjunto."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "O relato menciona conflitos relevantes entre colegas de equipe e ausência de apoio por parte da direção nas situações do cotidiano escolar. A recomendação do respondente é enfática, sugerindo que o profissional evite aceitar essa unidade diante da experiência vivida.",
    "notaOficial": 2.2
  },
  {
    "id": "UE_JORN_ARNALDO_A_DA_CRUZ",
    "codigo": "UE_JORN_ARNALDO_A_DA_CRUZ",
    "nome": "Jorn. Arnaldo A. da Cruz",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 319 (variação: 300–339)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Não",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.5,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 4.0,
        "obs": "A segurança no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.8,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.5,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.0,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.8,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "A unidade atende alunos com necessidades específicas que exigem atenção redobrada, e há episódios de desarmonia entre colegas, além de situações em que professores extrapolam as atribuições dos inspetores. A comunidade do entorno apresenta vulnerabilidade social, sendo recomendável manter os limites da função.",
    "notaOficial": 4.0
  },
  {
    "id": "UE_JOAO_AMAZONAS",
    "codigo": "UE_JOAO_AMAZONAS",
    "nome": "João Amazonas",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "990",
      "turmas": "15 por período, + 2 turmas de integral por período",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 1.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A direção é descrita como tranquila e organizada, sem excesso de cobrança no dia a dia. O principal desafio relatado envolve o relacionamento com famílias de contexto socioeconômico mais vulnerável. A equipe de inspetores é unida, e a recomendação geral é positiva.",
    "notaOficial": 3.4
  },
  {
    "id": "UE_KO_YAMAWAKI",
    "codigo": "UE_KO_YAMAWAKI",
    "nome": "Kó Yamawaki",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "600",
      "turmas": "22",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 2.0,
        "obs": "Relação com o setor pedagógico avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A escola atende alunos com necessidades específicas que demandam atenção redobrada, e a comunidade costuma se manifestar sobre temas sensíveis. A equipe enfrenta desafios de comunicação e organização interna, além de receber, por vezes, tarefas do setor pedagógico. Busca-se colegas colaborativos e dispostos a somar.",
    "notaOficial": 3.4
  },
  {
    "id": "UE_MARGARIDA_ORSO_DALAGASSA",
    "codigo": "UE_MARGARIDA_ORSO_DALAGASSA",
    "nome": "Margarida Orso Dalagassa",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 465 (variação: 430–500)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Indefinido",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.5,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.5,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.5,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 4.0,
        "obs": "A segurança no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.0,
        "obs": "O fornecimento de materiais para recreio avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 2.2,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.2,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.8,
        "obs": "O suporte à inclusão com profissionais de apoio classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "Há relatos de dificuldades na relação entre a direção e os inspetores, além de divergências internas na equipe quanto à organização de rotinas e responsabilidades no recreio. Recomenda-se cautela, discrição quanto a opiniões pessoais e firmeza para conduzir o trabalho de forma independente.",
    "notaOficial": 2.9
  },
  {
    "id": "UE_MARIA_MARLI_PIOVESAN",
    "codigo": "UE_MARIA_MARLI_PIOVESAN",
    "nome": "Maria Marli Piovesan",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "600",
      "turmas": "20",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.5,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "O relato aponta indisciplina entre os alunos e certo distanciamento das famílias, associado a um contexto socioeconômico mais vulnerável. Em contrapartida, a direção é destacada como bastante presente e solícita, oferecendo apoio consistente à equipe. A recomendação do respondente é entusiasticamente favorável à vaga.",
    "notaOficial": 4.1
  },
  {
    "id": "UE_MONTEIRO_LOBATO",
    "codigo": "UE_MONTEIRO_LOBATO",
    "nome": "Monteiro Lobato",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 575 (variação: 500–650)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Indefinido",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.5,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 2.5,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.5,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.5,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 2.2,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 3.0,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.8,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.8,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "A rotina é descrita, de forma geral, como tranquila, com desafios pontuais relacionados a alunos de inclusão e certa circulação de comentários entre professores. A demanda de trabalho é considerável, sendo recomendável disposição para atuar de forma dedicada, além de manter o foco nas próprias atribuições.",
    "notaOficial": 3.3
  },
  {
    "id": "UE_NANSYR_CECATO",
    "codigo": "UE_NANSYR_CECATO",
    "nome": "Nansyr Cecato",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "120",
      "turmas": "Não lembro",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 1.5,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.0,
        "obs": "O fornecimento de materiais para recreio avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 4.0,
        "obs": "O suporte à inclusão com profissionais de apoio considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato menciona episódios de violência e pouco apoio por parte da comunidade escolar. Recomenda-se atenção redobrada e postura cuidadosa em diferentes frentes, além de bastante paciência, já que parte significativa dos alunos apresenta vulnerabilidades sociais e emocionais que exigem sensibilidade no dia a dia.",
    "notaOficial": 3.4
  },
  {
    "id": "UE_NEWTON_BORGES_REIS",
    "codigo": "UE_NEWTON_BORGES_REIS",
    "nome": "Newton Borges Reis",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "800",
      "turmas": "16 por turno",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.0,
        "obs": "Relação com o corpo docente avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.5,
        "obs": "O suporte à inclusão com profissionais de apoio classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O principal ponto de atenção relatado envolve o cumprimento de horários por parte de alguns professores. Fora essa questão pontual, a experiência é descrita como positiva, e o profissional é encorajado a aceitar a oportunidade com confiança e sem receios.",
    "notaOficial": 3.6
  },
  {
    "id": "UE_OLIVIO_SOARES_SABOIA",
    "codigo": "UE_OLIVIO_SOARES_SABOIA",
    "nome": "Olivio Soares Sabóia",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "360",
      "turmas": "13",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.0,
        "obs": "O fornecimento de materiais para recreio avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados. | Inclusão com tutores | N/A | Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato aponta indisciplina acentuada entre os alunos e uma situação de favoritismo informal em relação a uma colega que exerce funções além do seu cargo. Também é mencionado que a direção tende a ser mais permissiva, possivelmente por receio de reações da comunidade.",
    "notaOficial": 3.2
  },
  {
    "id": "UE_OTTO_BRACARENSE_COSTA",
    "codigo": "UE_OTTO_BRACARENSE_COSTA",
    "nome": "Otto Bracarense Costa",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 800 (variação: 700–900)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.5,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.5,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.5,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.5,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 1.5,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.2,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.5,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.2,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.0,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "Os relatos apontam questionamentos quanto à gestão dos recursos e à definição de atribuições, além de pouco apoio da direção diante da influência da comunidade e da indisciplina dos alunos. Recomenda-se atenção redobrada para que funções fora do cargo não sejam atribuídas ao inspetor.",
    "notaOficial": 3.3
  },
  {
    "id": "UE_PARANAGUA",
    "codigo": "UE_PARANAGUA",
    "nome": "Paranaguá",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "300",
      "turmas": "14",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas turmas de Pré-escola Integral",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Apenas abertura",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "O único ponto mencionado no relato é a indisciplina de parte dos alunos, sem outros detalhes adicionais sobre a rotina, a direção ou a equipe. A avaliação geral registrada pelo respondente é bastante positiva, indicando uma boa experiência de trabalho nessa unidade escolar.",
    "notaOficial": 4.2
  },
  {
    "id": "UE_PAULO_FREIRE",
    "codigo": "UE_PAULO_FREIRE",
    "nome": "Paulo Freire",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "600",
      "turmas": "16 Por período",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Apenas fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 3.0,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 3.0,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.5,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.5,
        "obs": "O acesso à unidade considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato descreve a direção como neutra diante das situações do dia a dia, e o setor pedagógico como pouco atuante. Recomenda-se que o novo inspetor evite reclamações excessivas, já que esse comportamento por parte da própria direção pode gerar atritos adicionais dentro da equipe.",
    "notaOficial": 3.0
  },
  {
    "id": "UE_PEDRO_DALLABONA",
    "codigo": "UE_PEDRO_DALLABONA",
    "nome": "Pedro Dallabona",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "325",
      "turmas": "11",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato menciona que alunos atípicos demandam apoio específico, o qual nem sempre está disponível de forma integral, sendo por vezes oferecido apenas em parte do período letivo. Como pontos positivos, destacam-se uma equipe colaborativa e boa localização, próxima a uma avenida de fácil acesso.",
    "notaOficial": 3.7
  },
  {
    "id": "UE_PIRATINI",
    "codigo": "UE_PIRATINI",
    "nome": "Piratini",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "350",
      "turmas": "9",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.2,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.0,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 3.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O único ponto mencionado no relato é a indisciplina de parte dos alunos, sem outras informações adicionais sobre a direção, a comunidade ou a equipe. A recomendação do respondente é agir com certa cautela e manter uma postura atenta ao longo da atuação na unidade.",
    "notaOficial": 3.8
  },
  {
    "id": "UE_PROF_JOSE_CAVALLIN",
    "codigo": "UE_PROF_JOSE_CAVALLIN",
    "nome": "Prof. José Cavallin",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "340",
      "turmas": "13",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.0,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 4.0,
        "obs": "Relação com o setor pedagógico considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 4.0,
        "obs": "Relação com a direção considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato aponta indisciplina entre os alunos, conflitos ocasionais com professores e certa interferência da comunidade nas rotinas escolares. Apesar desses pontos de atenção, a avaliação geral do respondente é positiva, considerando a unidade um bom ambiente de trabalho no dia a dia.",
    "notaOficial": 3.6
  },
  {
    "id": "UE_PROF_CECILIA_MARIA_WESTPHALEN",
    "codigo": "UE_PROF_CECILIA_MARIA_WESTPHALEN",
    "nome": "Prof. Cecília Maria Westphalen",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 470 (variação: 450–480)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Indefinido",
      "soninhoPre": "Indefinido",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.3,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 2.3,
        "obs": "Relação com o setor pedagógico avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 1.7,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.7,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.3,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.7,
        "obs": "A segurança no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.2,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.3,
        "obs": "O acesso à unidade classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "Há relatos recorrentes de dificuldades na relação entre a gestão e a equipe de inspetores, incluindo falhas de comunicação com o setor pedagógico e situações de pressão excessiva por parte da chefia, que levaram um profissional a solicitar transferência. Recomenda-se cautela e conhecimento das próprias atribuições.",
    "notaOficial": 2.5
  },
  {
    "id": "UE_RACHEL_M_GONCALVES",
    "codigo": "UE_RACHEL_M_GONCALVES",
    "nome": "Rachel M. Gonçalves",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "630",
      "turmas": "22",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Apenas abertura",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.0,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 2.0,
        "obs": "O fornecimento de materiais para recreio avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.5,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.0,
        "obs": "O acesso à unidade avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O relato aponta diversas limitações estruturais, como falta de materiais, capacidade insuficiente para o número de alunos, problemas no prédio e presença eventual de roedores no pátio, além de pouca escuta por parte da direção. Recomenda-se fortalecer a união entre os inspetores diante desses desafios.",
    "notaOficial": 3.2
  },
  {
    "id": "UE_RAUL_GELBECK",
    "codigo": "UE_RAUL_GELBECK",
    "nome": "Raul Gelbeck",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "300",
      "turmas": "5",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Sim, possui transporte e o inspetor acompanha",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 4.0,
        "obs": "Relação com o corpo docente considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 3.0,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 1.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "A unidade apresenta poucos conflitos, com apoio efetivo da direção e do setor pedagógico na resolução de situações. Parte da comunidade, por vezes, questiona o comportamento de determinados estudantes. Recomenda-se firmeza aliada a acolhimento e diálogo, encaminhando ao setor pedagógico os casos que envolvam agressão física.",
    "notaOficial": 4.3
  },
  {
    "id": "UE_RITA_ANNA_CASSIA",
    "codigo": "UE_RITA_ANNA_CASSIA",
    "nome": "Rita Anna Cássia",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 560 (variação: 540–580)",
      "turmas": "19",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 3.3,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.7,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 2.7,
        "obs": "A segurança no entorno classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 2.5,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.3,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 2.0,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 1.8,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 2.5,
        "obs": "O acesso à unidade classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "Diversos relatos apontam para uma gestão ainda em processo de amadurecimento, dificuldades estruturais e alto índice de indisciplina entre alunos e famílias. Um número expressivo de profissionais solicitou remoção. Recomenda-se refletir cuidadosamente antes de aceitar a vaga e considerar outras opções na região.",
    "notaOficial": 2.7
  },
  {
    "id": "UE_ROMARIO_MARTINS",
    "codigo": "UE_ROMARIO_MARTINS",
    "nome": "Romário Martins",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 780 (variação: 720–840)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Indefinido",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.5,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 2.5,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.5,
        "obs": "Relação com a direção classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.0,
        "obs": "Relação com a secretaria classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 2.0,
        "obs": "Relação com os demais inspetores avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 1.5,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 3.0,
        "obs": "A estrutura física e mobiliária disponibilizada classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 3.0,
        "obs": "O fornecimento de materiais para recreio classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.2,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.0,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.2,
        "obs": "O acesso à unidade classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "Os relatos descrevem um ambiente de trabalho desgastante, marcado por conflitos frequentes entre a equipe, comentários e discussões que chegam a ocorrer na presença dos alunos, além de episódios de indisciplina relevantes. Ambos os respondentes desaconselham a unidade, recomendando que o inspetor avalie outras opções.",
    "notaOficial": 2.6
  },
  {
    "id": "UE_SIDONIO_MURALHA",
    "codigo": "UE_SIDONIO_MURALHA",
    "nome": "Sidônio Muralha",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "670",
      "turmas": "27",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Possui",
      "soninhoPre": "Sim",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Não realiza abertura nem fechamento",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 4.0,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.0,
        "obs": "A estrutura física e mobiliária disponibilizada considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.5,
        "obs": "O equilíbrio na distribuição de funções e escalas considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 4.0,
        "obs": "O suporte à inclusão com profissionais de apoio considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "É considerado um bom ambiente de trabalho para quem conhece bem suas atribuições e sabe estabelecer limites, já que há bastante autonomia. Pontos de atenção incluem a integração da equipe gestora, a estrutura física da unidade e o acúmulo eventual de funções.",
    "notaOficial": 4.1
  },
  {
    "id": "UE_THEODORO_DE_BONA",
    "codigo": "UE_THEODORO_DE_BONA",
    "nome": "Theodoro de Bona",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "330",
      "turmas": "6",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 5.0,
        "obs": "Relação com os demais inspetores avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 4.0,
        "obs": "A segurança no entorno considerado satisfatório, sem prejuízos relevantes ao cotidiano."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": null,
        "obs": "Dados insuficientes para avaliação precisa."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "Escola de porte pequeno, com bastante demanda de trabalho. Um ponto de atenção é o comportamento de alguns alunos mais velhos, que por vezes demonstram pouco respeito com professores e funcionários. Recomenda-se disposição e energia para lidar com o dia a dia.",
    "notaOficial": 4.4
  },
  {
    "id": "UE_TOMAZ_EDISON_DE_ANDRADE_VIEIRA",
    "codigo": "UE_TOMAZ_EDISON_DE_ANDRADE_VIEIRA",
    "nome": "Tomaz Edison de Andrade Vieira",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "aproximadamente 325 (variação: 300–350)",
      "turmas": "aproximadamente (variação entre relatos)",
      "quadroInspetores": "Incompleto",
      "ensinoIntegral": "Não oferta período integral",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Indefinido",
      "portoes": "Indefinido",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 2.5,
        "obs": "Relação com o corpo docente classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 3.0,
        "obs": "Relação com o setor pedagógico classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 2.0,
        "obs": "Relação com a direção avaliada como insatisfatória, com relatos de dificuldades de interlocução e suporte limitado."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 3.5,
        "obs": "Relação com a secretaria considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 1.0,
        "obs": "O fornecimento de materiais para recreio considerado crítico, com condições precárias que comprometem o desempenho da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 2.5,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 2.0,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 3.2,
        "obs": "O acesso à unidade classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 4.5,
        "obs": "A oferta de comércio no entorno avaliado positivamente, com condições favoráveis reportadas."
      }
    ],
    "sintese": "Unidade com avaliação global abaixo do ideal, com desafios relevantes nas relações, estrutura e condições de trabalho reportadas pelos inspetores.",
    "conselho": "Os relatos apontam pouco apoio institucional e dificuldades de relacionamento na equipe, apesar da boa estrutura e dos alunos bem avaliados. Um respondente considera que o adicional financeiro não compensa o desgaste, enquanto outro recomenda a vaga com ressalvas quanto à convivência interna.",
    "notaOficial": 2.6
  },
  {
    "id": "UE_ULYSSES_SILVEIRA_GUIMARAES",
    "codigo": "UE_ULYSSES_SILVEIRA_GUIMARAES",
    "nome": "Ulysses Silveira Guimarães",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "580",
      "turmas": "24",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Apenas Ensino Fundamental Integral (1º ao 5º ano)",
      "uei": "Não possui",
      "soninhoPre": "A escola não possui essa demanda",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 4.0,
        "obs": "Relação com os demais inspetores considerada boa, com interações predominantemente positivas e suporte adequado na maioria das situações."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 1.5,
        "obs": "A segurança no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 4.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 5.0,
        "obs": "O fornecimento de materiais para recreio avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 4.5,
        "obs": "O equilíbrio na distribuição de funções e escalas avaliado como excelente, atendendo plenamente às necessidades da equipe."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 4.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 1.5,
        "obs": "A oferta de comércio no entorno avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      }
    ],
    "sintese": "Unidade com avaliação global positiva, destacando-se nas relações interpessoais e em aspectos estruturais relevantes. Ambiente de trabalho considerado favorável em grande parte dos relatos.",
    "conselho": "Trata-se de uma unidade de tempo integral, com alunos permanecendo cerca de nove horas diárias na escola, o que demanda dedicação, criatividade e acolhimento por parte da equipe. Há alguns conflitos pontuais, mas o nível de indisciplina é considerado baixo em relação a outras unidades.",
    "notaOficial": 4.5
  },
  {
    "id": "UE_ZELIA_MILLEO_PAVAO",
    "codigo": "UE_ZELIA_MILLEO_PAVAO",
    "nome": "Zélia Milléo Pavão",
    "regional": "Curitiba",
    "caracteristicasGerais": {
      "alunos": "270",
      "turmas": "9",
      "quadroInspetores": "Completo",
      "ensinoIntegral": "Ambas (Pré e Fundamental Integral)",
      "uei": "Não possui",
      "soninhoPre": "Não",
      "onibusEscolar": "Não possui transporte escolar",
      "portoes": "Abertura e fechamento dos portões",
      "publicoAtendido": "Não informado"
    },
    "relacoesInterpessoais": [
      {
        "item": "Inspetores x Professores",
        "nota": 5.0,
        "obs": "Relação com o corpo docente avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Setor Pedagógico",
        "nota": 5.0,
        "obs": "Relação com o setor pedagógico avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Direção",
        "nota": 5.0,
        "obs": "Relação com a direção avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Inspetores x Secretaria",
        "nota": 5.0,
        "obs": "Relação com a secretaria avaliada como excelente, com alto nível de colaboração e facilidade no trabalho cotidiano."
      },
      {
        "item": "Entre os Inspetores da Unidade",
        "nota": 3.0,
        "obs": "Relação com os demais inspetores classificada como regular, apresentando oscilações e pontos de melhoria na comunicação e cooperação."
      }
    ],
    "caracteristicasEscola": [
      {
        "item": "Segurança Externa",
        "nota": 5.0,
        "obs": "A segurança no entorno avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Estrutura Física e Mobiliária",
        "nota": 1.5,
        "obs": "A estrutura física e mobiliária disponibilizada avaliado como insuficiente, com carências relevantes que afetam a rotina de trabalho."
      },
      {
        "item": "Materiais para Recreio",
        "nota": 4.0,
        "obs": "O fornecimento de materiais para recreio considerado adequado, com condições satisfatórias para o exercício das funções."
      },
      {
        "item": "Equilíbrio na Distribuição de Funções",
        "nota": 3.0,
        "obs": "O equilíbrio na distribuição de funções e escalas classificado como regular, apresentando limitações que impactam o cotidiano."
      },
      {
        "item": "Auxílio Pedagógico/Direção no Recreio",
        "nota": 2.5,
        "obs": "O auxílio do setor pedagógico e direção em situações de conflito classificado como regular, com aspectos a serem aprimorados."
      },
      {
        "item": "Inclusão com Tutores Profissionais",
        "nota": 1.5,
        "obs": "O suporte à inclusão com profissionais de apoio avaliado como insuficiente, com desafios que impactam a segurança ou o suporte."
      },
      {
        "item": "Acesso (ônibus, bicicleta, estacionamento)",
        "nota": 4.5,
        "obs": "O acesso à unidade avaliado positivamente, com condições favoráveis reportadas."
      },
      {
        "item": "Comércio e Restaurantes no Entorno",
        "nota": 3.0,
        "obs": "A oferta de comércio no entorno classificado como regular, com aspectos a serem aprimorados."
      }
    ],
    "sintese": "Unidade com avaliação global moderada, apresentando pontos fortes em algumas dimensões e oportunidades de melhoria em outras, especialmente em estrutura e suporte operacional.",
    "conselho": "O único ponto de atenção relatado envolve conflitos pontuais entre colegas de equipe, sem detalhamento de outras dificuldades relacionadas à direção, à comunidade ou aos alunos. A recomendação do respondente é objetiva e positiva, sugerindo que a vaga pode ser aceita sem grandes reservas.",
    "notaOficial": 3.9
  }
];
Ajuste códigos escolas ficha PDF estética site - Grok
