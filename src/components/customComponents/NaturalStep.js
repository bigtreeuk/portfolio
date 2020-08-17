import React from "react";
import WhiteTitle from "../WhiteTitle";
import WhiteBody from "../WhiteBody";
import { Container, Row, Col } from "reactstrap";



const LockdownSlump =   (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" md={{ size: 6 }}>
            <WhiteTitle style={styles.title} text={props.title} />
            <WhiteBody style={styles.body} text={props.text1} />
            <WhiteBody style={styles.body} text={props.text2} />
            <WhiteBody style={styles.body} text={props.text3} />
            <WhiteBody style={styles.body} text={props.text4} />
          </Col>
          <Col xs="11" md={{ size: 4, offset: 1 }}>
            <img style={styles.image} src={props.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  button: {


  },
  title: {},
  body: {},
  image: {
    width: "75%",
    height: "auto",
    overflow: "hidden",
    paddingTop: "10%",
  },
};

export default LockdownSlump;
