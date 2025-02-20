import { useRef, useState } from 'react';
import Container from "@/common/Container";
import { Row, Col } from "@/common/Grid";
import BrButton from "@/components/BrButton";
import BrCard from "@/components/BrCard";
import BrTag from "@/components/BrTag";
import BrAccordion, { BrAccordionHandle } from "@/components/ui/BrAccordion";

const accordionData = [
  {
    id: "id13", title: "02/03/2020 - Disponibilizada nova palavra-chave 'Controle Processual' e outros ajustes pontuais", content: `CODAC 0615/2018 - Desativação do serviço de mensageria interno do e-Processo para processo com valor consolidado maior que 5 milhões (Ver NT e-Processo nº 003/2020 disponível no Menu: Ajuda/Normatização).
Inativado o serviço interno de mensageria para alertar movimentações processuais de processo com valor consolidado maior ou igual a 5 milhões, criado provisoriamente, enquanto não era implantado o módulo de mensageria do e-Processo.
CODAC 0383/2019 - Criação da palavra-chave 'Controle Processual' (Ver NT e-Processo nº 003/2020 disponível no Menu: Ajuda/Normatização).
Criada a nova palavra-chave na funcionalidade Cadastrar Dossiê (preenchimento opcional).
Disponibilizada na consulta de palavras-chave de processo (preenchimento opcional), na seção 'Descrição do Processo'.
Disponibilizada na consulta de processo, no Filtro da Caixa de Trabalho, no Filtro de Mensageria e para uso nos Relatórios Gerenciais.
CODAC 0536/2019 - Ajustar a forma de cálculo e o rótulo do dado tempo médio na atividade para tempo médio na Atividade (últimos dois anos) (Ver NT e-Processo nº 003/2020 disponível no Menu: Ajuda/Normatização).
Implantada nova forma de cálculo do tempo médio do processo na atividade e disponibilizada junto a consulta do histórico do processo na Intranet, Internet e APP.
` },
  {
    id: "id14", title: "11/02/2020 - Implantação do controle do registro de identificação da origem do documento digital", content: `CODAC 0566/2015 - Implantação do controle do registro de identificação da origem do documento digital conforme Decreto nº 8.539, de 08 de Outubro de 2015 (Ver NT e-Processo nº 001/2020 disponível no Menu: Ajuda/Normatização).
Evolução das funcionalidades de Juntada de Documento e de Solicitação de Juntada de Documento (SJD) para permitir informar a origem do documento.
Evolução da funcionalidade Avaliar Solicitação de Juntada de Documento para exibir a informação "Origem do Documento".
Evolução da funcionalidade Copiar Documento de Outro Processo para obter a informação da "Origem de Documento" e "Detalhe de Origem do Documento".
Evolução da funcionalidade Importar Documento para preencher a palavra-chave Origem de Documento com o valor "Cópia simples" e o detalhe da origem com o valor "Não identificado".
Evolução da funcionalidade Importar Processo para obter a informação da Origem de Documento e Detalhe de Origem do Documento.
Evolução da funcionalidade Consultar Documento para permitir pesquisar um documento a partir das palavras-chave "Origem de Documento" e "Detalhe de Origem do Documento".
Evolução da funcionalidade Consultar Palavra-Chave de Documento para exibir as palavras-chave "Origem de Documento" e "Detalhe de Origem do Documento".
Ajustes nos documentos gerados automaticamente pelo sistema para preencherem a palavra-chave "Origem de Documento" e "Detalhe de Origem do Documento".
Implantação das informações de origem e do detalhe da origem do documento no rodapé do documento no momento da cópia ou impressão.
O sistema passa controlar os documentos que podem receber assinatura digital pela "origem do documento".
Evolução das funcionalidades de envio e recebimento de processo/dossiê do Sistema SEI com a informação de origem de documento.
Evolução da funcionalidades Alterar Palavra-Chave de Documento para permitir alterar o detalhe da origem do documento.
Evolução da funcionalidade Juntar Processo por Anexação para recuperar as informações da origem do documento e do detalhe da origem do documento.
Evolução da funcionalidade Solicitar Juntada de Documento da Internet (e-CAC), para disponibilizar a opção ao Contribuinte/Interessado informar se o documento é uma Cópia Simples.
Evolução da funcionalidade Consultar Palavra-Chave de Documento da internet (e-CAC) para exibir as novas palavras-chave Origem de Documento e Detalhe de Origem do Documento.
Execução de apuração especial para preencher as palavras-chave "Origem de Documento" e "Detalhe de Origem de Documento" dos documentos do passivo.
Reorganizada a tela da funcionalidade Emitir Ciência.
Ajustes na funcionalidade Consultar Palavra-chave do Documento para exibir com mais clareza a informação de cópia de documento de outro processo.
Ajustes nas funcionalidades de copia de documento de outro processo e de anexação de processos para preservar a hierarquia de documentos já existente no processo original.
Ajuste na funcionalidade de Autenticação para não exigir nova autenticação em um documento já autenticado e copiado de outro processo.
` },
  {
    id: "id15", title: "04/12/2019 - Adequação do número do processo ao padrão NUP", content: `CODAC 0717/2015 e 0718/2015 - Adequar o sistema e-Processo Internet e Intranet ao padrão NUP, permitindo o reconhecimento de processos que iniciam com ZERO.
O número do processo passa ser do formato "String" (texto) para permitir o reconhecimento de processos que inciciam com ZERO, obedecendo a regras de formação de: 12 dígitos para processos criados durante a vigência da 1ª Lei de formação de números de processos (de 1970 a 1980); 14 dígitos para processos criados durante a vigência da 2ª Lei de formação de números de processos (de 1981 a 1983); 15 dígitos para processos criados durante a vigência da 3ª Lei de formação de números de processos (de 1984 a 2000) e 17 dígitos para processos criados durante a vigência da 4ª Lei de formação de números de processos (a partir do ano 2000), considerada esta o padrão NUP (Número Único de Protocolo) a ser utilizada por todos os órgãos e entidades da Administração Pública Federal para controle de seus documentos, avulsos ou processos. (Portaria Interministerial MJSP/ME nº 11 de 25/11/2019)
` },
  {
    id: "id16", title: "18/11/2019 - Implantação de funcionalidades para 'Análise de Quesitos' e Gestão em Horas", content: `CODAC 1106/2012 - Implantação do novo Módulo Gestão em Horas - 3ª entrega (Ver NT e-Processo nº 006/2019 disponível no Menu: Ajuda/Normatização).
Evolução das funcionalidades 'Classificar ACT/Tema do Processo' e 'Responder Ficha de Quesitos' para que sejam executadas somente sobre processos localizados no tipo de unidade no qual o usuário encontra-se configurado.
Evolução da funcionalidade 'Classificar ACT/Tema do Processo' para registrar a operação no histórico do processo; e para permitir aproveitar a ficha de quesitos respondida quando o ACT/Tema do processo for alterado, desde que a ficha de quesitos de ambos os ACT/Temas (anterior e atual) seja a mesma.
Inclusão de restrição na funcionalidade 'Responder Ficha de Quesitos' para que ao responder a ficha, a soma do peso dos parâmetros não resulte em valor inferior a um minuto.
Evolução da funcionalidade 'Preencher FRA' para, ao incluir manualmente um processo, permitir definir se a hora estimada a ser inserida deve ser a do período do FRA ou a atual. Além disso, foi disponibilizado recurso para permitir remover todos os processos, que não possuem hora efetiva, de um determinado agrupamento do FRA.
Disponibilização de consulta para o acompanhamento da atualização da hora estimada de processos do passivo, em decorrência de alterações nas configurações do módulo gestão em horas.
Evolução da funcionalidade 'Gerenciar FRA' para que os campos tipo de unidade, unidade e equipe sejam preenchidos automaticamente pelo sistema, conforme a configuração de lotação do usuário.
Evolução da funcionalidade 'Liberar Processo' para que, ao liberar dois ou mais processos, sejam disponibilizados os campos para informar, opcionalmente, a hora efetiva para todos os processos envolvidos.
Evolução da funcionalidade 'Consolidar RHAP' para que, no cálculo dos índices do quadro de aferição de metas, sejam consideradas todas as casas decimais. Além disso, foi disponibilizada a exportação do resultado da consolidação e do relatório de inconsistências para o formato PDF.
Evolução da funcionalidade 'Consultar Atividades' para exibir as informações da configuração realizada pelo configurador nacional para atividades do tipo 'Análise de Quesitos'.
Evolução na funcionalidade 'Agendar Movimentação de Processos' para passar a exibir as equipes em ordem hierárquica.
Disponibilização de funcionalidade para permitir o cadastro de ficha de quesitos, quesitos, parâmetros e pesos do parâmetro utilizados para o cálculo da hora estimada dos processos.
Disponibilização de recurso para permitir que o configurador nacional realize o cadastramento e promova alterações em quesitos em modo ativo ou inativo.
Disponibilização de funcionalidade para permitir a associação de determinada atividade a um ACT/Tema e a uma ficha de quesitos no tipo de unidade.
Atualização da funcionalidade de configuração nacional de atividades para uma nova linguagem de programação.
Disponibilização para o configurador nacional associar os códigos FRA 09 e 13 a novos tipos de unidade.
Evolução no sistema para não exigir a associação de códigos FRA para tipos de unidades que não utilizam o módulo gestão em horas.
CODAC 0551/2018 - Implementar controle configurável que torna obrigatória a resposta a todos os quesitos de uma ficha de quesitos - 2º entrega (Ver NT e-Processo nº 006/2019 disponível no Menu: Ajuda/Normatização).
Disponibilização de controle configurável que pode tornar obrigatória a resposta do usuário a todos os quesitos de uma ficha de quesitos.
Evolução da funcionalidade 'Responder Ficha de Quesitos' para automatizar a seleção pelo sistema quando o parâmetro (resposta) for a única opção de um quesito, em uma ficha de quesitos configurada como de resposta obrigatória para todos os quesitos.
Disponibilização de funcionalidade para consultar as fichas de quesitos que estão associadas a determinado quesito.
Inclusão de restrição para que a palavra-chave de processo 'Alegações no Recurso para o CARF' somente possa ser preenchida/alterada por usuários vinculados às equipes dos tipos de unidade CARF e CSRF.
CODAC 0297/2019 - Evolução do RHAP de Julgamento e do RHAP Padrão (Ver NT e-Processo nº 006/2019 disponível no Menu: Ajuda/Normatização).
Evolução da funcionalidade 'Gerenciar FRA' para disponibilizar um novo atributo para indicar se o FRA deve ser contabilizado na consolidação do RHAP.
As visões gerenciais Padrao e Julgamento de consolidação do RHAP passam a ser consolidadas considerando o tipo de FRA que o usuário preencheu (FRA Padrão, Julgamento ou Conjugado).
Evolução da funcionalidade Consolidar RHAP por equipe para tratar o caso de membros que são desligados de uma equipe e são associados a outra equipe da mesma unidade, dentro do período do FRA.
Disponibilização da funcionalidade 'Excluir FRA'.
` },
  {
    id: "id17", title: "24/09/2019 - Transformação do Dossiê em Processo Dossiê e nova logomarca do sistema", content: `CODAC 0644/2015 - Adaptação do Dossiê ao padrão NUP 17 Dígitos, transformando o Dossiê em Processo Dossiê, implantação da nova logomarca do sistema e ajustes pontuais. (Ver NT e-Processo nº 005/2019 disponível no Menu: Ajuda/Normatização).
Ajustes na regra de formação do número do Dossiê ao padrão NUP (Número Único de Protocolo) 17 Dígitos;
Alterada nomenclatura de funcionalidades do sistema de Dossiê para Processo Dossiê;
Viabilizada a movimentação de Processo Dossiê para o Sistema SEI do Ministério da Economia;
Alterada a logomarca do sistema e-Processo na Intranet e Internet(e-CAC);
Removida a funcionalidade filtrar a natureza de processo da caixa de trabalho;
Incluído registro no log do sistema da operação "alterar o diagrama do fluxo de atividade no tipo de unidade";
Criada página no Menu Ajuda "Sobre o e-Processo".
` },
  {
    id: "id18", title: "05/09/2019 - Criação da funcionalidade de arquivamento de processo", content: `CODAC 0072/2014 - Criação da funcionalidade de arquivamento de processo, substituindo o procedimento de movimentação para o Arquivo Digital, e evoluções no procedimento de consulta e de desarquivamento de processo com sigilo interno atribuído. (Ver NT e-Processo nº 004/2019 disponível no menu: Ajuda/Normatização).
Disponibilização da funcionalidade Arquivar Processo na Caixa de Trabalho e no Menu do Processo (visualização do processo).
Disponibilização da funcionalidade Desarquivar Processo no Menu do Processo (visualização do processo).
Remoção da unidade Arquivo da funcionalidade Movimentar Processo.
Remoção da exigência de desarquivar processo para atividades classificadas como porta de entrada.
Evolução do procedimento de consulta e desarquivamento de processo com sigilo interno atribuído.
Criação de novo critério de pesquisa, na funcionalidade Consultar Processo, para facilitar a consulta de processos arquivados.
` },
  {
    id: "id19", title: "09/07/2019 - Exclusão automática de Dossiê de Atendimento sem documentos", content: `CODAC 0510/2017 - Permitir a consulta de dossiês de atendimento que foram excluídos automaticamente pelo sistema em função do não recebimento de documento ou solicitação de juntada de documento em prazo determinado. (Ver NT e-Processo nº 003/2019 disponível no Menu: Ajuda/Normatização).
Alteração da forma de exclusão de dossiê do tipo atendimento, que não recebeu documento ou SJD em prazo determinado, para permitir que possam ser consultados posteriormente;
Realização de apuração especial para remover a exclusão lógica de todos os dossiês de atendimento do passivo que foram excluídos automaticamente, para permitir que possam ser consultados;
Evolução para permitir, no e-Processo Intranet, que os dossiês de atendimento excluídos automaticamente possam ser consultados na consulta de processo, e possam ser incluídos manualmente no FRA, e no e-Processo Internet (e-CAC), possam ser visualizados pelo contribuinte na aba de processos inativos. Esses dossiês serão exibidos na situação 'excluído';
CODAC 0221/2019 - Exclusão automática de dossiê de atendimento que não recebeu documento ou solicitação de juntada de documento em até 30 dias corridos (para os dossiês criados antes da implantação desta demanda) e até 03 dias úteis (para os dossiês criados após a implantação desta demanda), implantação de bloqueio temporário de 30 min entre cadastros de dossiê de atendimento para o mesmo serviço (ACT Tema) e para o mesmo contribuinte, e ampliação do limite de abertura de dossiê de atendimento por contribuinte de 03 para 10 dossiês/dia. (Ver NT e-Processo nº 003/2019 disponível no Menu: Ajuda/Normatização).
Redução do prazo para a exclusão de dossiê do tipo atendimento, que não recebeu documento ou SJD, de 30 dias corridos para 3 dias úteis. Os dossiês criados antes da implantação dessa demanda, permanecerão com o prazo de 30 dias corridos;
Inclusão de bloqueio temporário de 30 minutos entre os cadastros de dossiê de atendimento para o mesmo serviço (ACT Tema) e para o mesmo contribuinte;
Ampliação do limite de abertura de dossiê por contribuinte de 03 para 10 dossiês por dia.
` },
  {
    id: "id20", title: "14/04/2019 - Permissão para responsáveis solidários/subsidiários interagirem no processo digital", content: `CODAC 0090/2014 - Recuperar do sistema SIEF-Processos o NI do responsável solidário/subsidiário do processo e permitir o gerenciamento/controle, via e-Processo intranet, da atuação do solidário/subsidiário no processo (esta implantação contempla o controle da responsabilidade solidária/subsidiária somente para processos provenientes de auto de infração, com arrolamento obtido a partir da integração com os sistemas SIEF-Processos e Ação Fiscal). (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Obtenção das informações de responsabilidade solidária/subsidiária a partir de integração com o sistema SIEF-Processos;
Disponibilização da funcionalidade de consulta dos responsáveis solidários e subsidiários vinculados ao processo;
Criação de palavra-chave indicativa da existência de responsável solidário/subsidiário vinculado ao processo;
Evolução da funcionalidade de consulta de processo para permitir utilizar como critério o NI do responsável solidário/subsidiário e a nova palavra-chave;
Evolução da funcionalidade de mensageria para permitir a criação de filtros utilizando como critério o NI do responsável solidário/subsidiário e a nova palavra-chave;
Evolução da consulta de procuração vinculada ao processo para buscar também as procurações cujo o outorgante é o responsável solidário/subsidiário do processo;
Evolução das funcionalidades de controle de sigilo para que o sigilo externo, que atualmente é aplicado ao contribuinte interessado, também seja aplicado ao responsável solidário/subsidiário do processo;
Disponibilização da identificação do solicitante de uma SJD, junto a funcionalidade de avaliar SJD, para indicar se o solicitante é o interessado do processo, ou o responsável solidário, ou o responsável subsidiário, ou o destinatário da ciência (sem outro vínculo com o processo);
CODAC 0589/2014 - Indicar com negrito os processos que entraram na caixa de trabalho do usuário ou da equipe e não foram visualizados. (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Sinalizar em negrito, na caixa de trabalho da equipe, os processos que ainda não foram visualizados pelos usuários integrantes da equipe;
Sinalizar em negrito, na caixa de trabalho do usuário, os processos que ainda não foram visualizados pelo usuário responsável;
Obs: Esta sinalização só passará a ser considerada para os processos que foram movimentados e/ou distribuídos a partir da data desta implantação.
CODAC 0641/2015 - Permitir ao usuário, que possua assinatura definida (configurada) em documento de processo, realizar assinatura, mesmo que o processo não esteja distribuído ao referido usuário. (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Criação da funcionalidade 'Documentos Pendentes de Assinatura', para o controle de documentos que possuem definição (configuração) de assinatura para o usuário "logado";
Evolução da funcionalidade Assinar Documento em Lote, presente na caixa de trabalho, para permitir que o usuário assine documentos em processos/dossiês, que não estejam distribuídos para ele, podendo realizar a assinatura mesmo para documentos juntados a processos/dossiês localizados em equipes/atividades distintas.
CODAC 0646/2015 - Disponibilizar nova palavra-chave para identificar se o contribuinte interessado do processo é optante pelo Domicílio Tributário Eletrônico (DTE) . (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Criação da palavra-chave 'Indicador de Optante pelo DTE', preenchida automaticamente no cadastramento do processo/dossiê, cuja informação é obtida via integração com o sistema Termo de Opção pelo DTE. Essa palavra-chave será atualizada automaticamente ao final do dia, podendo ser atualizada manualmente por processo, a qualquer momento;
Disponibilização da palavra-chave 'Indicador de Optante pelo DTE' na consulta de palavras-chave do processo, na consulta de processo/dossiê e como critério de filtro na funcionalidade de mensageria;
Realização de apuração especial para preencher a nova palavra-chave com a informação obtida do sistema Termo de Opção pelo DTE, para todos os processos/dossiês ativos existentes;
Complementação, na consulta de palavra-chave de processo, da informação no hint de cada palavra-chave, cuja informação é proveniente dos sistemas integrados, para informar a periodicidade de atualização automática.
CODAC 0655/2015 - Limpeza automática de configurações no Gerencial: Relatório de Estoque Configurável. (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
O sistema não irá mais exibir os relatórios gerenciais de estoque configuráveis que não foram executados nos últimos 13 meses, contando a partir da última execução do relatório;
O gerencial passará a exibir a data da última execução do relatório;
Realização de apuração especial para preencher a data da última execução dos relatórios gerencias de estoque configuráveis com a data da implantação desta demanda;
Criação da palavra-chave de processo 'Alegações no Recurso para o CARF'.
CODAC 0185/2016 - Preencher/atualizar a palavra-chave 'UA de Jurisdição' para dossiê digital que possua NI de contribuinte interessado. (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Evolução da funcionalidade de cadastramento de dossiê para o preenchimento da palavra-chave 'UA de Jurisdição' do contribuinte interessado;
A atualização dessa palavra-chave será realizada automaticamente na movimentação do dossiê digital entre unidades de tipos de unidade distintos, podendo ser atualizada manualmente a qualquer momento, por dossiê;
Realização de apuração especial para preencher a palavra-chave para todos os dossiês ativos existentes.
CODAC 0551/2018 - Inibir a exibição da coluna HPA do quadro de análise do FRA e outros ajustes pontuais - 1ª Entrega - (Ver NT e-Processo nº 001/2019 disponível no Menu: Ajuda/Normatização).
Evolução da funcionalidade Gerenciar FRA para permitir consultar os FRAs de determinado usuário da unidade, independentemente se a equipe selecionada possui a indicação de FRA associado;
Remoção da coluna HPA dos quadros de processos/dossiês em análise no FRA, e inclusão da coluna HPA na impressão do FRA, para o quadro processos/dossiês saídos;
Evolução do cadastro de equipe com a inclusão do campo número de ordem, para viabilizar a ordenação das equipes no cadastro de equipe e na árvore de movimentação;
Disponibilização, no cadastro de equipe, da exportação da relação de equipes para PDF/XLS.
CODAC 0216/2016 - Restringir a juntada por anexação de processos com interessados distintos, permitindo somente quando existir relação de responsabilidade solidária/subsidiária; e viabilizar o acesso ao processo do interessado arrolado como responsável solidário/subsidiário. (Ver NT e-Processo nº 002/2019 disponível no Menu: Ajuda/Normatização).
Evolução da funcionalidade Juntar Processo/Dossiê por Anexação para permitir a operação somente para processos/dossiês que possuam o mesmo NI do contribuinte, exceto se a relação entre eles for de responsabilidade solidária/subsidiária ou matriz/filial;
Inclusão do menu ações junto a opção 'Processos que sou Responsável Solidário/Subsidiário', no e-Processo Internet (e-CAC), permitindo ao responsável solidário/subsidiário acessar as mesmas funcionalidades de atuação processual disponibilizada para o contribuinte interessado do processo;
Evolução da funcionalidade de envio de SJD para permitir que o responsável solidário/subsidiário possa utilizá-la, com a devida identificação necessária de diferenciação do solicitante da SJD;
Evolução das rotinas e consultas de comunicados e intimações com o controle individual para o responsável solidário/subsidiário e para o contribuinte interessado;
Disponibilização, no e-Processo Internet (e-CAC), de funcionalidade de consulta de responsáveis solidários/subsidiários por processo;
Evolução da funcionalidade de outorga de procuração por processo para viabilizar a sua utilização pelo responsável solidário/subsidiário.
CODAC 0629/2018 - Viabilizar o cadastro de dossiê de atendimento, através do e-Processo internet (e-CAC), em qualquer unidade de atendimento da RFB, com base em informações selecionadas pelo contribuinte/interessado - 1ª Entrega - (Ver NT e-Processo nº 002/2019 disponível no Menu: Ajuda/Normatização).
Evolução da funcionalidade de abertura de dossiê de atendimento no e-Processo Internet (e-CAC), para contemplar duas novas formas de cadastro de dossiê: o cadastro em qualquer unidade de atendimento da RFB a partir da seleção definida pelo contribuinte/interessado, e o cadastro de dossiê a partir da localização de determinado processo a ser vinculado​;
Disponibilização de campo para o contribuinte informar, opcionalmente, um número de telefone;
Restrição de exclusão de ACT e Tema que esteja presente na configuração de cadastro de dossiê de atendimento;
A funcionalidade de configuração nacional de serviços (ACT/Tema), disponibilizados para o cadastro de dossiê de atendimento pelo contribuinte, foi desabilitada temporariamente até a sua evolução prevista para a 2ª entrega desta demanda.
CODAC 0235/2019 - Retirada da restrição que impede a importação de Processos.
Foi removida a restrição na importação de processos papel(comprot) para digital (e-Processo) em função de duplicação de controle de Processo digital entre os sistemas e-Processo e Sei-MF.
` },
  {
    id: "id21", title: "08/10/2018 - Integração do e-Processo com o sistema Sei-MF", content: `CODAC 0184/2016 - Cadastro de Dossiê Digital de Atendimento pelo Contribuitne/Interessado via e-CAC. (Ver NT e-Processo nº 011/2018 disponível no Menu: Ajuda/Normatização).
Viabilizado Cadastro de dossiê digital de Atendimento pelo Contribuinte disponível no e-CAC.
Configuração dos tipos, da recepção e do controle de exibição de dossiês digitais abertos pelo contribuinte.
Evolução da Configuração de Dossiês/Processos sigilosos.
Associação da lista de serviços disponíbilizadas ao Contribuinte a Tabela ACT.
Evolução da Funcionalidade de Cadastro de Equipes/Atividades para impedir desconfiguração enquanto estiver configurada para recepção de Dossiês de Atendimento cadastrados pelo Contribuinte.
Evolução da Funcionalidade da SJD no e-CAC para permitir o acesso ao protocolo da SJD mesmo após o envio da SJD.
` },
  {
    id: "id22", title: "17/04/2017 - Implantação do novo perfil 'EPRO Assinar Doc. Juntado'", content: `CODAC 0590/2017 - Integração do e-Processo com o sistema Sei-MF, viabilizando o fluxo e controle processual digital entre os referidos sistemas (Ver NT e-Processo nº 008/2018 disponível no Menu: Ajuda/Normatização).
Implantada rotina de movimentação de processos digitais do e-Processo para o unidades que gerencial o processo digital pelo Sistema Sei-MF.
Configurada equipe/atividade de recebimento de processos enviados via Sei-MF para unidades e-Processo do Tipo de Unidade "Orgãos Centrais" e "SRRF" e uma equipe CARF.
Disponibilizada funcionalidade de acompanhamento de Movimentação de Processos para o sistema Sei-MF
Rotina de Cancelamento de envio de processos ao Sei-MF
Atualizada rotinas no e-processo Internet(e-CAC) e no App e-Processo para registrar no histórico, movimentações de processos ao sistema Sei-MF
Desativada todas as funcionalidades de controle de processo papel no e-Processo.
CODAC 1106/2012 - Novo Módulo de Gestão de Horas - Segunda Entrega. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
Disponibilizada as funcionalidades de configuração nacional de cadastro e manutenção da tabela ACT (Origem ACT, Tributo ACT, ACT e Tema ACT)
Implementada a funcionalidade de configuração nacional de cadastro e manutenção de códigos FRA.
CODAC 0648/2015 - Permitir a alteração da definição de assinatura pendente pelo membro responsável pelo processo. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
Passa a permitir a alteração das definições de assinaturas pendentes em determinado documento pelo usuário responsável pelo processo.
CODAC 0816/2015 - Permitir o preenchimento do título para todas as classificações de tipo de documento. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
O sistema passa a permitir o preenchimento do título do documento para todos os tipos de documentos.
Permite a consulta/visualização do Título do documento na consulta de documentos, no índice do processo, nas palavras-chave do documento e demais funcionalidades de juntada e cópia/impressão de documentos.
CODAC 0576/2016 - Ajustar e padronizar a informação disponibilizada no campo IP dos Relatórios de Auditoria do e-Processo. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
Padronizada a exibição da informação de IP da Estação de Trabalho do usuário nos relatórios de auditora de configuração, auditoria de processo, auditoria de usuário e auditoria de documento.
CODAC 0452/2017 - Registrar no histórico do processo mudanças no indicador de sigilo ao contribuinte em processos e dossiês. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
O sistema passa a registrar no histórico do processo, as mudanças de sigilo do processo/dossiê em relação ao contribuinte/interessado e em relação ao controle de visualização interna do NI.
A alteração do indicador passa constar nos relatórios de auditoria
Passa a destacar na caixa de trabalho, indicador para processo/dossiê com "inibição de visualização externa (Contribuinte/Interessado)"
CODAC 0568/2017 - Evoluir a árvore de destino da tela de movimentação de processo/dossiê. (Ver NT e-Processo nº 009/2018 disponível no Menu: Ajuda/Normatização).
Ajustada a árvore de equipes/atividades de destino da tela de Movimentar Processo e na funcionalidade de agendar movimentação, passando a exibir somente unidades/equipes que contenham atividades disponíveis para movimentação.
Ampliada a janela de leitura do nome das equipe na tela de movimentar processo.
` }
];

const BoasVindas = () => {
  // Ref to call accordion methods
  const accordionRef = useRef<BrAccordionHandle>(null);
  // State to track whether all items are expanded or not
  const [expanded, setExpanded] = useState(false);

  const handleToggleAll = () => {
    if (!expanded) {
      accordionRef.current?.expandAll();
      setExpanded(true);
    } else {
      accordionRef.current?.collapseAll();
      setExpanded(false);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-balance">Bem-vindo ao e-Processo - Processo Digital</h1>
      <Row>
        <Col xs={12} md={4} >
          <div className="bg-gray-2 p-6">
            <BrTag
              value="Alert"
              icon="exclamation-triangle"
              type="text"
              color="danger"
              size="medium"
            />
            <p className="mt-2">
              <b>Conversão de documentos OFFICE em PDF</b>
            </p>
            <p>
              A funcionalidade de conversão automática de documento MS Office ou
              BR Office para documento PDF não garante compatibilidade em todas as
              conversões. (Ver NT e-Processo nº 004/2015. disponível no menu
              Ajuda/Normatização).
            </p>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <BrCard className="p-6">
            <div className="d-flex justify-content-between">
              <h4 className="m-0 mb-6 text-balance">Últimas atualizações no sistema</h4>
              <BrButton onClick={handleToggleAll}>
                {expanded ? "Contrair Tudo" : "Expandir Tudo"}
              </BrButton>
            </div>
            <BrAccordion ref={accordionRef} data={accordionData} />
          </BrCard>
        </Col>
      </Row>
    </Container>
  );
};

export default BoasVindas;
