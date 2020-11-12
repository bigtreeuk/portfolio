import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor";
import IntroCase from "../components/IntroCase";
import Title from "../components/Title";
import Body from "../components/Body";
import LockdownSlump from "../components/customComponents/LockdownSlump";
import PerfectingFlow from "../components/customComponents/PerfectingFlow";
import CustomCard2 from "../components/CustomCard2";
import BackgroundLockdown from "../images/background/lockdown.png";
import BackgroundFlow from "../images/background/brakesFlowBG.png";
import Bullet from "../images/icons/bullet.png";
import Monitor from "../images/BrakesCaseStudy/displayBrakes.png";
import Pixel1 from "../images/BrakesCaseStudy/pixel1.png";
import Pixel2 from "../images/BrakesCaseStudy/pixel2.png";
import Pixel3 from "../images/BrakesCaseStudy/pixel3.png";
import Pixel4 from "../images/BrakesCaseStudy/pixel4.png";
import Hotjar from "../images/BrakesCaseStudy/hotjar.png";
import ServiceMap from "../images/BrakesCaseStudy/Example service blueprint Brakes.png";
import Pixel1b from "../images/BrakesCaseStudy/pixel1b.png";
import Pixel2b from "../images/BrakesCaseStudy/pixel2b.png";
import Overflow from "../images/BrakesCaseStudy/overflow.png";
import Background1 from "../images/hero/brakesHeader.png";
import Logo from "../images/BrakesCaseStudy/brakesLogo.png";
import Nav from "../components/NavMenu";

const BrakesB2C = (props) => {
  return (
    <BodyBackgroundColor backgroundColor="white">
      <Container>
        <Row>
          <Nav />
          <Col>
            <IntroCase
              image={Background1}
              titleText={"Feeding the Masses"}
              subText={
                "Rapidly iterated a food ecommerce website during the 2020 pandemic. Responded to feedback in real-time. Collaborated remotely on sprints. Mitigated a difficult user journey. Tested and pivoted rigorously."
              }
              text="Brakes are the UK’s largest food wholesaler. They supply restaurants, pubs and more."
              logo={Logo}
            />
          </Col>
        </Row>
        <Row>
          <div style={styles.caseColumn2}>
            <Col>
              <div style={styles.slump}>
                <LockdownSlump />
              </div>
            </Col>
          </div>
        </Row>

        <Row>
          <Col style={styles.projectTitle}>
            <div>
              <Title text={"A project in fast-forward"} />
            </div>
          </Col>
        </Row>
        <Row style={styles.bodyProject}>
          <Col xs="12" lg="6">
            <Body
              text={
                "I covered UX/UI design, working with Business Analysts, an Experience Analyst and a Voice of Customer. We partnered with KPS developers."
              }
            />
          </Col>
          <Col>
            <Body
              text={
                "Our team followed a Lean start-up approach. So we went live with a minimum viable website and reacted to feedback in real-time."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 3 }}>
            <div style={styles.centreText}>
              <Body text={"We aimed to:"} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Media>
              <Media left>
                <img style={styles.bulletImage} src={Bullet} />
              </Media>
              <Media body>
                <div style={styles.bulletText}>
                  <Body text={"generate enough orders to sustain B2C"} />
                </div>
              </Media>
            </Media>
          </Col>
          <Col sm={{ size: 6, offset: 3 }}>
            <Media>
              <Media left>
                <img style={styles.bulletImage} src={Bullet} />
              </Media>
              <Media body>
                <div style={styles.bulletText}>
                  <Body text={"communicate and adapt quickly"} />
                </div>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 10, offset: 1 }}>
            <img style={styles.monitor} src={Monitor} />
          </Col>
        </Row>
        <Row style={styles.bodyBuilding}>
          <Col>
            <Title text={"Building the journey"} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Body
              text={
                "We undertook workshops to capture and separate B2C personas, touchpoints, triggers and requirements."
              }
            />
          </Col>

          <Col xs="12">
            <Body
              text={
                "I took a UX Specialist Certification with Akendi in 2019. Along with learning how to take a UX project from Discovery to Production, you also get a nice library of templates for Service Blueprints, Experience Maps and suchlike."
              }
            />
          </Col>
          <Col xs="12">
            <Body
              text={
                "The below example shows a Service Blueprint for an unregistered B2C user who is looking for a specific product (e.g. toilet roll). One usability snag of our B2C experience was that payment would be collected by phone, after an order is placed."
              }
            />
          </Col>
          <Col xs="12">
            <img style={styles.serviceMap} src={ServiceMap} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Body
              text={
                "We needed users to sign-up to add to cart. I designed a modal to activate upon this event. The user then selects delivery or click & collect but only submits email/password."
              }
            />
          </Col>
          <Col xs="12">
            <Body
              text={
                "I broke up the register journey to reduce the chance of bouncing. The rest of the sign-up comes at checkout, when the user is more committed. It includes a progress indicator. Radio buttons/checkboxes are right to left for convenience on mobile."
              }
            />
          </Col>
        </Row>
        <Row style={styles.monitor}>
          <Col xs="6" md="3">
            <img style={styles.mobile} src={Pixel1} />
          </Col>
          <Col xs="6" md="3">
            <img style={styles.mobile} src={Pixel2} />
          </Col>
          <Col xs="6" md="3">
            <img style={styles.mobile} src={Pixel3} />
          </Col>
          <Col xs="6" md="3">
            <img style={styles.mobile} src={Pixel4} />
          </Col>
        </Row>

        <Row style={styles.waveRow}>
          <div style={styles.caseColumn3}>
            <Col xs="12">
              <div style={styles.slump2}>
                <PerfectingFlow />
              </div>
            </Col>
            <Col sm={{ size: 8, offset: 2 }}>
              <CustomCard2 text="Before lockdown we worked to three-week sprints. So suddenly shipping a new concept in  days required quickly simplifying complex journeys. Overflow was invaluable for analysing user flows with multiple departments at once." />
            </Col>
            <Col sm={{ size: 8, offset: 2 }}>
              <img style={styles.overflow} src={Overflow} />
            </Col>
          </div>
        </Row>
        <Row style={styles.bodyBuilding}>
          <Col xs="2" sm="1">
            <img alt="Hotjar" style={styles.hotjar} src={Hotjar} />
          </Col>
          <Col xs="10" sm="11">
            <Title text={"Listening and pivoting"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Body
              text={
                "Recordings and feedback revealed registered users were trying to log-in at the sign-up form."
              }
            />
            <Body
              text={
                "In our user story, entering a post-code should enable the ‘sign-up’ CTA, but still let users select ‘log-in’. However in production, entering a post code wrongly took users directly to the sign-up screen, without them selecting ‘sign-up’."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Body
              text={
                "We raised a bug, but I added a safety net anyway. If a user's email was on file, a dropdown would appear, linking to the log-in page where their email would be auto-filled."
              }
            />
          </Col>
        </Row>
        <Row style={styles.monitor}>
          <Col sm={{ size: 3, offset: 2 }}>
            <img style={styles.mobile} src={Pixel1b} />
          </Col>
          <Col sm={{ size: 3, offset: 2 }}>
            <img style={styles.mobile} src={Pixel2b} />
          </Col>
        </Row>
        <Row>
          <Col xs="10" style={styles.lastCol}>
            <Title text={"The outcome"} />
            <Body
              text={
                "Thanks to the skill of our Business Analysts in prioritisation and all of our experience in pivoting/iterating, we worked quickly and effectively. Conversion rate rose from 1.5% at launch to over 6% in June."
              }
            />
          </Col>
        </Row>
      </Container>
    </BodyBackgroundColor>
  );
};

const styles = {
  back: {},
  lastCol: {
    marginTop: "15%",
    marginBottom: "10%",
  },
  overflow: {
    width: "100%",
    paddingTop: "5%",
  },
  slump: {
    marginTop: 500,
  },
  slump2: {
    marginTop: 200,
  },
  caseColumn2: {
    backgroundImage: `url(${BackgroundLockdown})`,
    width: "100vw",
    height: 1100,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    display: "block",
  },
  waveRow: {
    marginTop: "5%",
  },
  caseColumn3: {
    backgroundImage: `url(${BackgroundFlow})`,
    width: "100vw",
    height: 1200,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    display: "block",
  },
  projectTitle: {
    paddingTop: "10%",
  },
  bodyProject: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  bodyBuilding: {
    paddingTop: "15%",
  },
  centreText: {
    paddingTop: "3%",
    paddingBottom: "5%",
  },
  bulletText: {
    paddingBottom: "5%",
    paddingLeft: "0%",
  },
  bulletImage: {
    paddingTop: "10%",
    width: "75%",
  },
  monitor: {
    overflow: "hidden",
    width: "100%",
    height: "auto",
    paddingTop: "5%",
  },
  mobile: {
    width: "95%",
    height: "auto",
    paddingBottom: "15%",
  },
  serviceMap: {
    width: "95%",
    height: "auto",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  hotjar: {
    height: "auto",
    width: 60,
  },
};

export default BrakesB2C;
