import React from "react";
import WhiteTitle from "../WhiteTitle";
import WhiteBody from "../WhiteBody";
import { Container, Row, Col } from "reactstrap";

const Research = (props) => {
  return (
    <div style={styles.researchDiv}>
      <Container>
        <Row style={styles.bodyBuilding}>
          <Col xs="12">
            <WhiteTitle text={props.title} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="7">
            <div style={styles.research}>
              <WhiteBody text={props.text1} />
            </div>
            <div style={styles.research}>
              <WhiteBody style={styles.research} text={props.text2} />
            </div>
            <div style={styles.research}>
              <WhiteBody style={styles.research} text={props.text3} />
            </div>
          </Col>
          <Col style={styles.research} xs="12" md="5">
            <img style={styles.image} src={props.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  researchDiv: {
  },
  bodyBuilding: {
    paddingTop: "35%",
    paddingBottom: "1%",
  },
  image: {
    width: "100%",
 

  },
  research: {
    paddingBottom: 20,
  },
};

export default Research;
