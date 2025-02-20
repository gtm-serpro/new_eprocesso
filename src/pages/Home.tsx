import Container from "@/common/Container";
import { Col, Row } from "@/common/Grid";
import BrButton from "@/components/BrButton";
import BrCard from "@/components/BrCard";
import BrInput from "@/components/BrInput";

const Home = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-balance">Acesso a Suíte de Aplicativos da Receita Federal</h1>

      <BrCard>
        <Row className="p-0 m-0">
          <Col xs={12} md={5} className="d-flex flex-column justify-content-center px-sm-6 mb-4 mb-md-0 p-lg-6">
            <BrInput label="CPF" />
            <BrInput label="Senha KRFB" type="password" className="mt-2" />
            <div className="d-flex justify-content-end gap-2 mt-4">
              <BrButton>Limpar</BrButton>
              <BrButton primary className="ml-2">Avançar</BrButton>
            </div>
          </Col>
          <Col
            xs={12}
            md={7}
            className="d-flex flex-column justify-content-center align-items-center bg-gray-2"
          >
            <div className="p-6 text-center">
              <h2 className="m-0">Acesso por Certificado Digital</h2>
              <p>
                Se você já possui Certificado Digital, clique no botão abaixo:
              </p>
              <BrButton secondary icon="certificate" className="mt-2">
                Certificado Digital
              </BrButton>
            </div>
          </Col>
        </Row>
      </BrCard>

      <Row className="p-4">
        <p>As informações contidas nos sistemas da Administração Pública são protegidas por sigilo.</p>
        <p>As seguintes condutas constituem infrações ou ilícitos que sujeitam o usuário deste sistema à responsabilização administrativa, penal e cível:</p>
        <ol type="a">
          <li>O acesso não autorizado;</li>
          <li>O acesso não motivado por necessidade de serviço;</li>
          <li>A disponibilização voluntária ou acidental da senha de acesso;</li>
          <li>A disponibilização não autorizada de informações contidas no sistema;</li>
          <li>A quebra do sigilo relativo a informações contidas no sistema.</li>
        </ol>
        <p>Todo e qualquer acesso é monitorado e controlado. Proteja sempre a sua senha. Quando encerrar as operações, tenha o cuidado de clicar na opção "Sair". Ao teclar a opção "Avançar", o usuário declara-se ciente das responsabilidades acima referidas.</p>
        <p>Fundamento Legal: Constituição Federal, Código Penal, Código Tributário Nacional e Portaria SRF/Cotec 45/2004</p>
      </Row>
    </Container>
  );
};

export default Home;
