import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import SubHeader from "./Subheader";
import CustomCard from "../components/CustomCard";



const IntroCase = (props) => {

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <div style={styles.caseColumn}>
            <img alt="brakes-hero" style={styles.hero} src={props.image} />
          </div>
        </Col>
        <Col xs="12">
          <div style={styles.text}>
            <Title text={props.titleText} />
            <SubHeader text={props.subText} />
          </div>
        </Col>
        <Col sm={{ size: 10, offset: 1 }}>
          <CustomCard logo={props.logo} text={props.text} />
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    marginBottom: "8%",
  },
  hero: {
    backgroundSize: "cover",
    width: "100%",
    position: "relative"
  },
  caseColumn: {
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  text: {
    paddingTop: "5%"
  },
  textMob: {
    paddingBottom: "10%",
  },
  titleText: {
    position: "absolute",
    bottom: "-20%",
  }
};

export default IntroCase;
