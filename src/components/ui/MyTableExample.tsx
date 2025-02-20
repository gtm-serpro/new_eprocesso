import React from 'react';
import BrTable, { BrTableRow } from './BrTable';

const headers = [
    'Informações',
    'Indicadores',
    'Número Processo',
    'Nome Contribuinte',
    'Nome do Responsável pelo Processo',
    'CPF do Responsável pelo Processo',
    'Nome da Unidade Formalizadora do Processo no e-Processo',
    'Valor Total das Inscrições',
    'Assunto COMPROT',
    'Data do Protocolo',
    'NI Contribuinte'
];

const rows: BrTableRow[] = [
    { id: '1', columns: ['Info 3', 'Indicador 5', '38312.528459/2017-99', 'LUCAS GABRIEL BARROS', 'LUCAS GABRIEL BARROS', '222.299.952-34', 'Unidade 4', 'R$ 760,00', 'Assunto 1', '9/6/2016', '53.126.774/0001-52'] },
    { id: '2', columns: ['Info 2', 'Indicador 5', '27847.866941/2019-21', 'DANIELA FERNANDES CASTRO', 'THIAGO CESAR NUNES', '559.433.382-89', 'Unidade 1', 'R$ 564,00', 'Assunto 3', '6/6/2015', '83.616.959/0001-47'] },
    { id: '3', columns: ['Info 2', 'Indicador 4', '14135.270470/2016-76', 'RAFAEL DA COSTA BRAGA', 'FELIPE AUGUSTO RIBEIRO', '362.297.403-21', 'Unidade 3', 'R$ 4694,00', 'Assunto 1', '15/5/2011', '94.552.791/0001-10'] },
    { id: '4', columns: ['Info 2', 'Indicador 1', '66360.952730/2015-99', 'FLORISVALDO FELICIO DE CARVALHO', 'FLORISVALDO FELICIO DE CARVALHO', '890.584.562-66', 'Unidade 1', 'R$ 576,00', 'Assunto 1', '16/1/2024', '30.734.604/0001-65'] },
    { id: '5', columns: ['Info 5', 'Indicador 3', '56048.810122/2024-76', 'RAFAEL DA COSTA BRAGA', 'MARIA CLARA FONSECA', '643.546.914-85', 'Unidade 1', 'R$ 3760,00', 'Assunto 2', '4/2/2014', '35.853.138/0001-63'] },
    { id: '6', columns: ['Info 1', 'Indicador 2', '67416.286217/2015-81', 'DANIELA FERNANDES CASTRO', 'MARIA CLARA FONSECA', '699.767.390-98', 'Unidade 5', 'R$ 3705,00', 'Assunto 5', '16/1/2015', '89.187.378/0001-65'] },
    { id: '7', columns: ['Info 1', 'Indicador 4', '87688.236164/2016-18', 'MARCOS VINICIUS ALMEIDA', 'FERNANDA ROCHA MOREIRA', '620.811.856-43', 'Unidade 2', 'R$ 4872,00', 'Assunto 4', '12/11/2019', '82.137.364/0001-42'] },
    { id: '8', columns: ['Info 5', 'Indicador 5', '65699.795882/2014-42', 'MARIA CLARA FONSECA', 'THIAGO CESAR NUNES', '680.377.274-53', 'Unidade 4', 'R$ 1102,00', 'Assunto 1', '17/11/2024', '72.801.934/0001-49'] },
    { id: '9', columns: ['Info 4', 'Indicador 3', '29603.664780/2011-34', 'FERNANDA ROCHA MOREIRA', 'MARCOS VINICIUS ALMEIDA', '798.935.693-53', 'Unidade 2', 'R$ 2476,00', 'Assunto 1', '6/12/2025', '97.516.144/0001-42'] },
    { id: '10', columns: ['Info 1', 'Indicador 3', '49012.577680/2014-71', 'FERNANDA ROCHA MOREIRA', 'FERNANDA ROCHA MOREIRA', '837.521.643-22', 'Unidade 5', 'R$ 3188,00', 'Assunto 2', '24/8/2024', '90.327.565/0001-27'] },
    { id: '11', columns: ['Info 2', 'Indicador 4', '71546.611322/2016-47', 'FELIPE AUGUSTO RIBEIRO', 'DANIELA FERNANDES CASTRO', '965.282.871-21', 'Unidade 1', 'R$ 4004,00', 'Assunto 2', '4/8/2023', '48.936.745/0001-55'] },
    { id: '12', columns: ['Info 5', 'Indicador 4', '85237.900290/2021-10', 'ANA PAULA SILVA', 'FERNANDA ROCHA MOREIRA', '214.920.815-64', 'Unidade 1', 'R$ 2486,00', 'Assunto 3', '11/12/2012', '53.434.500/0001-53'] },
    { id: '13', columns: ['Info 3', 'Indicador 1', '33561.526522/2015-92', 'JOÃO BATISTA SOUZA', 'RAFAEL DA COSTA BRAGA', '751.442.665-84', 'Unidade 4', 'R$ 2120,00', 'Assunto 5', '3/12/2011', '77.394.470/0001-78'] },
    { id: '14', columns: ['Info 2', 'Indicador 5', '56086.371780/2025-75', 'JOÃO BATISTA SOUZA', 'FELIPE AUGUSTO RIBEIRO', '633.350.714-94', 'Unidade 2', 'R$ 3930,00', 'Assunto 4', '10/3/2025', '99.114.737/0001-62'] },
    { id: '15', columns: ['Info 2', 'Indicador 4', '13173.426549/2025-82', 'RAFAEL DA COSTA BRAGA', 'FLORISVALDO FELICIO DE CARVALHO', '581.237.972-59', 'Unidade 4', 'R$ 2300,00', 'Assunto 4', '5/10/2024', '86.621.466/0001-54'] },
    { id: '16', columns: ['Info 3', 'Indicador 4', '94285.479548/2013-92', 'GABRIELA CRISTINA MOURA', 'FELIPE AUGUSTO RIBEIRO', '517.733.420-31', 'Unidade 5', 'R$ 1765,00', 'Assunto 2', '14/4/2012', '58.203.766/0001-96'] },
    { id: '17', columns: ['Info 1', 'Indicador 1', '67923.543363/2014-92', 'FLORISVALDO FELICIO DE CARVALHO', 'CARLOS EDUARDO PEREIRA', '271.492.170-54', 'Unidade 1', 'R$ 2590,00', 'Assunto 2', '24/6/2013', '19.572.602/0001-97'] },
    { id: '18', columns: ['Info 5', 'Indicador 2', '76452.117429/2011-33', 'RAFAEL DA COSTA BRAGA', 'THIAGO CESAR NUNES', '682.777.775-54', 'Unidade 4', 'R$ 159,00', 'Assunto 4', '1/7/2022', '95.792.956/0001-46'] },
    { id: '19', columns: ['Info 1', 'Indicador 3', '89427.423360/2022-97', 'ANA PAULA SILVA', 'MARIA CLARA FONSECA', '214.253.134-65', 'Unidade 4', 'R$ 1174,00', 'Assunto 1', '9/8/2012', '96.655.272/0001-69'] },
    { id: '20', columns: ['Info 4', 'Indicador 4', '50957.558503/2022-64', 'MARIA CLARA FONSECA', 'RAFAEL DA COSTA BRAGA', '373.830.440-11', 'Unidade 2', 'R$ 3510,00', 'Assunto 2', '9/4/2013', '16.940.283/0001-24'] },

];

const MyBrTableExample: React.FC = () => {
    return (
        <BrTable
            title="Minha Tabela Personalizada"
            headers={headers}
            rows={rows}
            totalItems={rows.length}
            perPage={10}
            currentPage={1}
            onPageChange={(page) => console.log('Change to page', page)}

        />
    );
};

export default MyBrTableExample;
