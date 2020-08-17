import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { gsap } from "gsap";
import Header from "./Header";
import ThumbSubHeader from "./ThumbSubHeader";


const CustomCardLanding = (props) => {

const styles = {
  div: {
    position: "relative",
    textAlign: "center",
  },

  text: {
    paddingTop: "6%",
  },
  container: {
    width: "100%",
    height: 200,
    borderStyle: "solid",
    borderWidth: "4px",
    borderColor: "#383a48",
    backgroundColor: "#F6F7F8",
    boxShadow: "5px 5px 5px 0px #949493",
    marginBottom: "10%",
    position: "relative",
    backgroundColor: "#F6F7F8",
  },
  containerHovered: {
    width: "100%",
    height: 200,
    borderStyle: "solid",
    borderWidth: "4px",
    borderColor: "#46546D",
    backgroundColor: "#F6F7F8",
    boxShadow: "5px 5px 5px 0px #949493",
    marginBottom: "10%",
    position: "relative",
    backgroundImage: `url(${props.background})`,
  },
  thumb: {
    overflow: "visible",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
};
  const [hovered, setHovered ] = useState("container");

var myTween = gsap.to("#back", 9, {
  backgroundPosition: props.movement,
  ease: "none",
  repeat: -1,
});

  const handleHover = () => {
    setHovered("containerHovered")
   myTween.play();
  };

  const handleLeave = () => {
    setHovered("container")
    myTween.kill();
  };

  return (
    <Container >
      <Row
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        id="back"
        className="thumbDiv"
        style={styles[hovered]}
      >
        <Col style={styles.text} xs="7" md="7">
          <Header text={props.title} />

          <ThumbSubHeader text={props.sub} />
        </Col>
        <Col xs={{ size: 10, offset: 4 }} md={{ size: 5, offset: 8 }}>
          <img style={styles.thumb} src={props.thumb} />
        </Col>
      </Row>
    </Container>
  );


};


              


export default CustomCardLanding;
