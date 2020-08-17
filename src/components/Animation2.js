import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { gsap, Sine } from "gsap";

import Red from "../images/SVGTitleRed.svg";
import Blue from "../images/SVGTitleBlue.svg";

const Animation2 = () => {

  useEffect(() => {
   gsap.to("#red", 1, {
     left: "+=180",
     top: "+=45",
     repeat: -1,
     repeatDelay: 1,
     yoyo: true,
     ease: Sine.easeOut,
   });
   gsap.to("#blue", 1, {
     left: "-=150",
     top: "-=40",
     repeat: -1,
     repeatDelay: 1,
     yoyo: true,
     ease: Sine.easeOut,
   });
    });

  return (
    <Container>
      <Row>
        <Col style={styles.col} xs="12">
          <img id="red" style={styles.red} src={Red} />
          <img id="blue" style={styles.blue} src={Blue} />
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  col: {
    paddingBottom: "15%",
    paddingTop: "20%",
    height: 600
  },
  red: {
    position: "absolute",
    width: "75%",
    height: "auto",
    x: 0,
    left: 40
  },
  blue: {
    position: "absolute",
    width: "75%",
    height: "auto",
    top: 95,
    left: 330
  },
};

export default Animation2;
