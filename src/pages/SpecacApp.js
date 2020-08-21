import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor";
import Body from "../components/Body";
import Research from "../components/customComponents/Research";
import Background from "../images/SpecacApp/circuitBG.png";
import BackgroundResearch from "../images/SpecacApp/graphBG.png";
import Bullet from "../images/icons/bullet.png";
import Iphone1 from "../images/SpecacApp/iphone1.png";
import Iphone2 from "../images/SpecacApp/iphone2.png";
import XD from "../images/SpecacApp/AdobeXD.png";
import Expo from "../images/SpecacApp/Expo.png";
import Pixel4XL from "../images/SpecacApp/pixel 4 xl mask.svg";
import Nest from "../images/SpecacApp/nest.png";
import Nav from "../components/NavMenu";
import NavWhite from "../components/NavWhite";
import Video from "../components/Video";
import IntroCase from "../components/IntroCase";  
import Title from "../components/Title";
import SubHeader from "../components/Subheader";
import CustomCard from "../components/CustomCard";
import Logo from "../images/SpecacApp/logo.png";
import AppStore from "../images/SpecacApp/appStore.svg";
import Background1 from "../images/hero/header.png";

const SpecacApp = (props) => {
  return (
    <BodyBackgroundColor backgroundColor="white">
      <Container>
        <Row>
          <Nav />
          <Col>
            <IntroCase
              image={Background1}
              titleText={"Print to web, web to app"}
              subText={
                "Took a concept from print to web, then web to app. Applied UI inspiration from real-world design. Built an Android/iOS app using React Native. Tested and pivoted during design and production."
              }
              text="Specac Ltd are an infrared analytical device developer and Queen’s Award winner."
              logo={Logo}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <div style={styles.text2}>
              <Title text={"From an early iteration"} />
            </div>
          </Col>
          <Col xs="12" md="12">
            <div style={styles.text3}>
              <SubHeader
                text={
                  "Due to the success of our educational online content, we decided to 'digitise' the traditional infrared lookup tool. I built a prototype using Javascript and analytics showed great engagement. So I designed and developed an app using React Native."
                }
              />
            </div>
          </Col>
          <Col
            style={styles.smartphoneContainer}
            xs={{ size: 10, offset: 2 }}
            md={{ size: 4, offset: 4 }}
          >
            <div style={styles.iframe}>
              <iframe
                src="https://player.vimeo.com/video/450036536?autoplay=1&loop=1 "
                frameborder="0"
                allow="autoplay; fullscreen; loop"
                width="234"
                height="480"
              ></iframe>
            </div>
            <div style={styles.skin}>
              <img
                src={Pixel4XL}
                alt="A Pixel 4 XL smartphone"
                height="530"
                width="auto"
              />
            </div>
          </Col>
          <Col xs="12" style={styles.links}>
              <a
                href="https://apps.apple.com/us/app/id1526464500"
                target="_blank"
              >
                <img src={AppStore} />
              </a>
          </Col>
          <div style={styles.linkContainer}>
            <a
              style={styles.link}
              className="portBody"
              target="_blank"
              href="https://www.sigmaaldrich.com/catalog/product/aldrich/z407321?lang=en&region=GB"
            >
              Click here to see a traditional wavelength-to-compound lookup
              tool.
            </a>
          </div>
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
          <Col xs="12">
            <Title text={"The outcome"} />
            <Body
              text={
                "The app has just been uploaded to the App Store and is under review for the Google Play Store."
              }
            />
          </Col>
          <Col style={styles.links}>
            <a
              href="https://apps.apple.com/us/app/id1526464500"
              target="_blank"
            >
              <img src={AppStore} />
            </a>
          </Col>
        </Row>
      </Container>
    </BodyBackgroundColor>
  );
};

const styles = {
  linkContainer: {
    paddingTop: "4%",
  },
  link: {
    color: "black",
    textDecoration: "underline",
  },
  links: { paddingTop: "5%" },
  intro: {
    marginTop: "5%",
    marginBottom: "5%",
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

  text2: {
    paddingTop: "5%",
  },

  text3: {
    paddingTop: "2%",
    paddingBottom: "1%",
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
  card: {
    marginBottom: "15%",
  },
  smartphoneContainer: {
    overflow: "hidden",
    position: "relative",
    height: 550,
    width: "100%",
    marginTop: "5%",
  },
  iframe: {
    position: "absolute",
    width: "90%",
    height: "100%",
    border: 0,
    top: 40,
  },
  skin: {
    position: "absolute",
    left: 0,
    top: 0,
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
    paddingBottom: "10%",
  },
  video: {
    marginBottom: "15%",
  },
};

export default SpecacApp;
