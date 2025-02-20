import BrButton from "@/components/BrButton";
import BrCheckbox from "@/components/BrCheckbox";
import BrSelectStandard from "@/components/BrSelectStandard";
import BrTab from "@/components/BrTab";
import BrAccordion, { BrAccordionHandle } from "@/components/ui/BrAccordion";
import BrTable from "@/components/ui/BrTable";
import MyBrTableExample from "@/components/ui/MyTableExample";
import { useRef, useState } from 'react';


const accordionData = [
  { id: "1", title: "ACOMPANHAR ATO NORMATIVO/SISTEMA", content: <MyBrTableExample /> },
  { id: "2", title: "ACOMPANHAR PRONUNCIAMENTO", content: <MyBrTableExample /> },
  { id: "3", title: "ACOMPANHAR SOLUÇÃO DE PAF OU PJ", content: <MyBrTableExample /> },
  { id: "4", title: "ANALISAR PAGAMENTO", content: <MyBrTableExample /> },
  { id: "5", title: "ANALISAR PARCELAMENTO", content: <MyBrTableExample /> },
  { id: "6", title: "APRECIAR E ASSINAR DOCUMENTO", content: <MyBrTableExample /> },
  { id: "7", title: "EMITIR PARECER / DESPACHO", content: <MyBrTableExample /> },
  { id: "8", title: "FORMALIZAR PROCESSO/DOSSIÊ", content: <MyBrTableExample /> },
  { id: "9", title: "PARA RELATAR", content: <MyBrTableExample /> },
  { id: "10", title: "PREPARAR DISTRIBUIÇÃO", content: <MyBrTableExample /> },
  { id: "11", title: "PREPARAR E INSTRUIR PROCESSO/DOSSIÊ", content: <MyBrTableExample /> },
  { id: "12", title: "PREPARAR PARA ENVIO AO ARQUIVO", content: <MyBrTableExample /> },
  { id: "13", title: "PROCEDER ARROLAMENTO", content: <MyBrTableExample /> },
  { id: "14", title: "VERIFICAR PROCEDIMENTOS", content: <MyBrTableExample /> }
]

const CaixaTrabalho = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const accordionRef = useRef<BrAccordionHandle>(null);
  // State to track whether all items are expanded or not


  return (
    <>
      <h1>Caixa de Trabalho - <b>Equipe</b></h1>
      <div className="bg-gray-2 w-100 p-2 d-flex align-items-center gap-4">
        <span className="d-flex align-items-center">Equipe: <BrSelectStandard options={['item1']} value={""} size={1}></BrSelectStandard><BrButton icon="sync-alt" circle></BrButton></span>
        <span><BrCheckbox label="Exibir todas" /></span>
        <span><BrCheckbox label="Sem agrupamento" /></span>
        <span><BrCheckbox label="Exibir apensados" /></span>
        <span className="d-flex align-items-center">Filtro: <BrSelectStandard options={['item1']} value={""} size={1}></BrSelectStandard><BrButton icon="edit" circle></BrButton></span>

      </div>
      <BrTab items={['Processos', 'Providências']} activeIndex={activeTab} onChange={handleTabChange}>

        {activeTab === 0 && (
          <BrAccordion ref={accordionRef} data={accordionData} />
        )}
        {activeTab === 1 && (
          <div>
            <h3>Conteúdo para Providências</h3>
            <p>Aqui você coloca os detalhes e dados referentes às providências.</p>
          </div>
        )}
      </BrTab>

    </>
  );
};

export default CaixaTrabalho;
