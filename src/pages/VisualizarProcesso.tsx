import Container from "@/common/Container";
import { Col, Row } from "@/common/Grid";
import BrButton from "@/components/BrButton";
import BrCard from "@/components/BrCard";
import BrItem from "@/components/BrItem";
import BrList from "@/components/BrList";
import BrMessage from "@/components/BrMessage";
import { BrCheckbox } from "..";

const VisualizarProcesso = () => {
  return (
    <>

      <Row>
        <Col sm={4} className="d-flex flex-column">
          <div className="bg-gray-5 p-3">
            header
          </div>
          <div className="bg-pure-0 ">
            <BrList>
              <BrItem><BrCheckbox /></BrItem>
              <BrItem><BrCheckbox /></BrItem>
              <BrItem><BrCheckbox /></BrItem>

            </BrList>
          </div>
        </Col>
        <Col >
          <div className="bg-blue-warm-vivid-70 p-2 text-pure-0">
            header
          </div>
          <div className="bg-gray-2 p-2 d-flex gap-4">
            <span className="d-flex">
              <BrButton icon="sticky-note" circle color="mint"></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
            </span>
            <span>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
            </span>
            <span>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
            </span>
            <span>
              <BrButton icon="sticky-note" circle></BrButton>
              <BrButton icon="sticky-note" circle></BrButton>
            </span>

          </div>
          <Row className="mt-4">
            <Col>
              <BrCard>1</BrCard>
              <BrCard>1</BrCard>
            </Col>
            <Col>
              <BrCard>
                <BrMessage message={undefined}></BrMessage>
                <BrMessage message={undefined} ></BrMessage>
                <BrMessage message={undefined}></BrMessage>
                <BrMessage message={undefined}></BrMessage>
                <BrMessage message={undefined}></BrMessage>
              </BrCard>
            </Col>
          </Row>
        </Col>
      </Row>


    </>
  );
};

export default VisualizarProcesso;
