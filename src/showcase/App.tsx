import { HashRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "..";
import Header from "../components/ui/Header";
import Home from "../pages/Home";
import Menu from "../components/ui/Menu";
import Page02 from "../pages/Page02";
import Page03 from "../pages/Page03";
import Page04 from "../pages/Page04";
import "@/styles/App.css"
import BoasVindas from "../pages/BoasVindas";
import GoToTop from "@/components/ui/GoToTop";

const App = () => {
  const fluid = true;

  return (
    <HashRouter>
      <Header fluid={fluid} />
      <GoToTop />
      <Container fluid={fluid} margin={{ t: 3 }}>
        <Row>
          <Menu />
          <Col>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/boas-vindas"} element={<BoasVindas />} />
              <Route path={"/page-2"} element={<Page02 />} />
              <Route path={"/page-3"} element={<Page03 />} />
              <Route path={"/page-4"} element={<Page04 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
};

export default App;
