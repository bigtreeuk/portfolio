import React from "react";
import WhiteTitle from "../WhiteTitle";
import WhiteBody from "../WhiteBody";
import { Container, Row, Col } from "reactstrap";

const ReimagineDemo = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" md="6">
            <WhiteTitle style={styles.title} text={props.title} />
            <WhiteBody style={styles.body} text={props.text1} />
          </Col>
          <Col xs="12" md="6">
            <img style={styles.image} src={props.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  button: {},
  title: {},
  body: {},
  image: {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    paddingTop: "10%",
  },
};

export default ReimagineDemo;
