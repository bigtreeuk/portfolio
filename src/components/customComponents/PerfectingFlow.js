import React from "react";
import Title from "../Title";
import { Container, Row, Col } from "reactstrap";

const PerfectingFlow = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" >
            <Title style={styles.title} text="Perfecting the flow" />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  title: {},
  body: {},
};

export default PerfectingFlow;
