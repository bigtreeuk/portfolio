import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Intro from '../components/Intro';
import BodyBackgroundColor from 'react-body-backgroundcolor';
import CaseStudiesExport from '../components/CaseStudies';
import Nav from "../components/NavMenu";
import Background from '../images/background/background1.svg';
import CustomCardLanding from "../components/CustomCardLanding";

const Landing = props => {


    return (
      <BodyBackgroundColor backgroundColor="white">
        <Container>
          <Row>
            <Nav />
            <Col>
              <Intro />
            </Col>
          </Row>
          <Row>
            <div style={styles.caseColumn}>
              <Col>
                <CaseStudiesExport />
              </Col>
            </div>
          </Row>
        </Container>
      </BodyBackgroundColor>
    );
};

const styles = {
  caseColumn: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "tile",
    backgroundRepeat: "initial",
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
};

export default Landing;