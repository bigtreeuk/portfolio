import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import SubHeader from "./Subheader";
import CustomCard from "../components/CustomCard";
import Background1 from "../images/hero/brakesHeader.png";
import Logo from "../images/BrakesCaseStudy/brakesLogo.png";

const IntroCase = (props) => {

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <div style={styles.caseColumn}>
            <img alt="brakes-hero" style={styles.hero} src={Background1} />
          </div>
        </Col>
        <Col xs="12">
          <div style={styles.text}>
            <Title text={props.titleText} />
            <SubHeader text={props.subText} />
          </div>
        </Col>
        <Col sm={{ size: 10, offset: 1 }}>
          <CustomCard logo={Logo} text="Brakes are the UK’s largest food wholesaler. They supply restaurants, pubs and more." />
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
