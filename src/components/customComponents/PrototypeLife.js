import React from "react";
import WhiteTitle from "../WhiteTitle";
import WhiteBody from "../WhiteBody";
import { Container, Row, Col } from "reactstrap";

const PrototypeLife = (props) => {
  return (
    <div style={styles.researchDiv}>
      <Container>
        <Row style={styles.bodyBuilding}>
          <Col xs="12">
            <WhiteTitle text={props.title} />
          </Col>
        </Row>
        <Row>
          <Col style={styles.research} xs="12" md="12">
            <WhiteBody text={props.text1} />
          </Col>
          <Col style={styles.research} xs="12" md="12">
            <WhiteBody text={props.text2} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <img style={styles.image} src={props.image} />
          </Col>
          <Col xs="12" md="6">
            <img style={styles.image} src={props.image2} />
          </Col>
          <Col xs="12" md="6">
            <img style={styles.image} src={props.image3} />
          </Col>
          <Col xs="12" md="6">
            <img style={styles.image} src={props.image4} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  researchDiv: {},
  bodyBuilding: {
    paddingTop: "19%",
    paddingBottom: "1%",
  },
  image: {
    width: "100%",
    marginTop: "3%"
  },
  research: {
    paddingBottom: 20,
  },
};

export default PrototypeLife;
