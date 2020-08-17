import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import BrakesPhone from "../images/BrakesCaseStudy/BrakesMobile.png";
import SpecacPhone from "../images/SpecacApp/SpecacMobile.png";
import VRPhone from "../images/SpecacVR/VRMobile.png";

import Triangles from "../images/background/triangles.svg";
import Stripes from "../images/background/stripes.svg";
import Noughts from "../images/background/noughts.svg";
import Zigzag from "../images/background/zigzag.svg";
import ThreeD from "../images/background/3D.svg";
import Current from "../images/background/current.svg";
import Lines from "../images/background/lines.svg";
import Kiwi from "../images/background/kiwi.svg";

import Title from '../components/Title';

import CustomCardLanding from "../components/CustomCardLanding";

const CaseStudies = props => {

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, [width]);

    const BrakesTitle = "Lockdown super-sprint";
    const BrakesSub = "adapted quickly on an ecommerce project";

    const SpecacAppTitle = "End-to-end app design";
    const SpecacAppSub = "design/development led by real-world UI";

    const VRTitle = "From virtual to reality";
    const VRSub = "built an app for VR technology";

    const SpecacWebTitle = "A user-driven rebrand";
    const SpecacWebSub = "doubled conversions and transformed a brand";

    return (
      <Container style={styles.caseStudiesContainer}>
        <Row xs="12">
          <Col>
            <div style={styles.title}>
              <Title text={"Case Studies"} />
            </div>
          </Col>
        </Row>
        <div style={styles.thumbs}>
          <Link style={{ textDecoration: "none" }} to="/brakes-b2c">
            <Row>
              <Col md={{ size: 10, offset: 1 }}>
                <CustomCardLanding
                  thumb={BrakesPhone}
                  title={BrakesTitle}
                  sub={BrakesSub}
                  background={Kiwi}
                  movement={"1000px"}
                />
              </Col>
            </Row>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/specac-app">
            <Row>
              <Col md={{ size: 10, offset: 1 }}>
                <CustomCardLanding
                  thumb={SpecacPhone}
                  title={SpecacAppTitle}
                  sub={SpecacAppSub}
                  background={Current}
                  movement={"-1000px"}
                />
              </Col>
            </Row>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/specac-vr">
            <Row>
              <Col md={{ size: 10, offset: 1 }}>
                <CustomCardLanding
                  thumb={VRPhone}
                  title={VRTitle}
                  sub={VRSub}
                  background={ThreeD}
                  movement={"1000px 1000px"}
                />
              </Col>
            </Row>
          </Link>
        </div>
      </Container>
    );
};

const styles = {
  caseStudiesContainer: {
    marginTop: "7%",
    marginBottom: "10%",
  },
  title: {
    paddingLeft: "4%",
    paddingTop: "3%"
  },
  thumbs: {
    paddingTop: 25
  }
};

export default CaseStudies;