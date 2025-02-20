import { HashRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "..";
import Header from "../components/ui/Header";
import Home from "../pages/Home";
import Menu from "../components/ui/Menu";
import Page03 from "../pages/VisualizarProcesso";
import Page04 from "../pages/Page04";
import "@/styles/App.css"
import BoasVindas from "../pages/BoasVindas";
import GoToTop from "@/components/ui/GoToTop";
import CaixaTrabalho from "../pages/CaixaTrabalho";
import VisualizarProcesso from "../pages/VisualizarProcesso";

const App = () => {
  const fluid = true;

  return (
    <HashRouter>
      <Header fluid={fluid} />
      <GoToTop />
      <Container fluid >
        <Row>
          <Menu />
          <Col>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/boas-vindas"} element={<BoasVindas />} />
              <Route path={"/caixa-trabalho"} element={<CaixaTrabalho />} />
              <Route path={"/visualizar-processo"} element={<VisualizarProcesso />} />
              <Route path={"/page-4"} element={<Page04 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
};

export default App;
