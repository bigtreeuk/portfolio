import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor";
import IntroCase3 from "../components/IntroCase3";
import Title from "../components/Title";
import Body from "../components/Body";
import NaturalStep from "../components/customComponents/NaturalStep";
import Research from "../components/customComponents/Research";
import Background from "../images/SpecacApp/circuitBG.png";
import BackgroundResearch from "../images/SpecacApp/graphBG.png";
import Bullet from "../images/icons/bullet.png";
import Iphone1 from "../images/SpecacApp/iphone1.png";
import Iphone2 from "../images/SpecacApp/iphone2.png";
import XD from "../images/SpecacApp/AdobeXD.png";
import Expo from "../images/SpecacApp/Expo.png";
import Cardboard from "../images/SpecacApp/cardboard.png";
import Nest from "../images/SpecacApp/nest.png";

import NavWhite from "../components/NavWhite";
import Video from "../components/Video";
import CustomCard from "../components/CustomCard";
import Logo from "../images/SpecacApp/logo.png";

const SpecacApp = (props) => {
  return (
    <BodyBackgroundColor backgroundColor="white">
      <Container>
        <Row>
          <div style={styles.caseColumn2}>
            <NavWhite />
            <Col>
              <div style={styles.slump}>
                <NaturalStep
                  title={"Print to web, web to app"}
                  image={Iphone2}
                  text1={"Took a concept from print to web, then web to app."}
                  text2={"Applied UI inspiration from real-world design."}
                  text3={"Built an Android/iOS app using React Native."}
                  text4={"Tested and pivoted during design and production."}
                />
              </div>
            </Col>
          </div>
        </Row>

        <Row>
          <Col style={styles.card} md={{ size: 12 }}>
            <CustomCard
              style={styles.card}
              logo={Logo}
              text="Specac Ltd are an infrared analytical device developer and Queen’s Award winner. They continue to innovate and set their sights on an ambitious growth plan."
            />
          </Col>
          <Col style={styles.intro}>
            <IntroCase3
              titleText={"From an early iteration"}
              image={Cardboard}
              text1={
                "Specac's online educational content was hugely popular. A digital everyday tool for lab analysts seemed like a positive extension of this."
              }
              text2={
                "So I recreated a traditional infrared correlation chart on our website using JavaScript. Analytics showed great engagement from users."
              }
              text3={
                "But this rough-and-ready tool wasn’t mobile-friendly, available offline or attractive. A mobile app seemed more useful for lab settings."
              }
              image={Cardboard}
            />
          </Col>
        </Row>

        <Row>
          <Col style={styles.projectTitle}>
            <div>
              <Title text={"End-to-end production"} />
            </div>
          </Col>
        </Row>
        <Row style={styles.bodyProject}>
          <Col xs="12" lg="6">
            <Body
              text={
                "I led design and development for this project. I liaised with Engineering and our Spectroscopist for technical soundness."
              }
            />
          </Col>
          <Col>
            <Body
              text={
                "I started with research, then wireframes, then prototypes in Adobe XD. Then I built the app using ReactNative.js."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 3 }}>
            <div style={styles.centreText}>
              <Body text={"We aimed for:"} />
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
                  <Body text={"1,000 downloads for iOS and Android each"} />
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
                  <Body text={"scope for a smartwatch app in the future"} />
                </div>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <img style={styles.laptop} src={XD} />
          </Col>
          <Col xs="12" md="6">
            <img style={styles.laptop} src={Expo} />
          </Col>
        </Row>
        <Row>
          <div style={styles.caseColumn3}>
            <Col style={styles.researchCol}>
              <Research
                title={"Researching the UI"}
                text1={
                  "The original cardboard tool features a round slider to select frequencies, like a wheel chart calendar. Contextual inquiry showed this ‘spinning’ was ergonomic for someone busy at a lab instrument."
                }
                text2={
                  "Competitor apps featured dated design. There is definitely a gap in the market for a contemporary UI. While looking for inspiration, smart home tech struck me as a real-world UI where a busy user quickly checks or adjusts a data value."
                }
                text3={
                  "As we liked the idea of eventually transitioning to smartwatch, I looked into smartwatch UI’s."
                }
                image={Nest}
              />
            </Col>
          </div>
        </Row>
        <Row style={styles.listPivot}>
          <Col xs="10">
            <Title text={"Listening and pivoting"} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Body
              text={
                "I experimented with patterns and shapes. Then distilled the designs and layouts, based on usability testing with colleagues and partners in labs. In the final concept, a circular slider adjusts a value, which filters a table of matching functional groups. This can also be updated by number-pad input."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Body
              text={
                "During design we pivoted from filtering by only microns, to microns and nanometers. But in development we pivoted back to just filtering by microns. It was seen as 'feature-loading' to include both."
              }
            />
          </Col>
        </Row>
        <Row style={styles.cardboard}>
          <Col xs={{ size: 5, offset: 1 }} md={{ size: 3, offset: 2 }}>
            <img style={styles.mobile} src={Iphone1} />
          </Col>
          <Col xs={{ size: 5, offset: 1 }} md={{ size: 3, offset: 2 }}>
            <img style={styles.mobile} src={Iphone2} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" style={styles.lastCol}>
            <Title text={"The outcome (pending)"} />
            <Body
              text={
                "Covid-19 paused development of the app temporarily for some months. But I’m now developing again. I am currently working on the dark mode and ensuring the app can prevent the user’s phone screen from going to sleep."
              }
            />
          </Col>
          <Col xs="12" md="12" style={styles.video}>
            <Video
              video={
                "https://player.vimeo.com/video/433972955?autoplay=1&loop=1"
              }
              width={"250"}
              height={"445"}
            />
          </Col>
        </Row>
      </Container>
    </BodyBackgroundColor>
  );
};

const styles = {
  intro: {
    marginTop: "5%",
    marginBottom: "5%"
  },
  listPivot: {
    marginTop: "25%",
  },
  lastCol: {
    marginTop: "10%",
    marginBottom: "10%",
  },
  overflow: {
    width: "100%",
    paddingTop: "5%",
  },
  slump: {
    marginTop: "20%",
  },
  slump2: {
    marginTop: 200,
  },


  caseColumn2: {
    backgroundImage: `url(${Background})`,
    width: "100vw",
    height: 1100,
    position: "relative",
    left: "50%",
    right: "50%",
    top: "0%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    marginBottom: "15%",
    display: "block",
  },
  caseColumn3: {
    backgroundImage: `url(${BackgroundResearch})`,
    width: "100vw",
    height: 1080,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    display: "block",
    marginTop: "20%",

  },
  card:{
    marginBottom: "15%"
  },

  laptop: {
    width: "100%",
    paddingTop: "10%",
  },
  waveRow: {
    marginTop: "10%",
  },
  crap: { paddingTop: "5%" },
  cardboard: {
    width: "100%",
    marginBottom: "10%",
    marginTop: "10%",
  },
 
  projectTitle: {
    paddingTop: "10%",
  },
  bodyProject: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  bodyBuilding: {
    paddingTop: "25%",
    paddingBottom: "1%",
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
  mobile: {
    width: "95%",
    height: "auto",
    paddingBottom: "15%",
  },
  hotjar: {
    width: "100%",
    height: "auto",
  },
  codepen: {
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  video: {
    marginBottom: "15%"
  }
};

export default SpecacApp;
