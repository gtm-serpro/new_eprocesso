import { HashRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "..";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Page01 from "./Page01";
import Page02 from "./Page02";
import Page03 from "./Page03";
import Page04 from "./Page04";

const App = () => {
  const fluid = true;

  return (
    <HashRouter>
      <Header fluid={fluid} />
      <Container fluid={fluid} margin={{ t: 3 }}>
        <Row>
          <Menu />
          <Col>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/page-1"} element={<Page01 />} />
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
