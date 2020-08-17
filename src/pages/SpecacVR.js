import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor";
import IntroCase2 from "../components/IntroCase2";
import Title from "../components/Title";
import Body from "../components/Body";
import ReimagineDemo from "../components/customComponents/ReimagineDemo";
import PrototypeLife from "../components/customComponents/PrototypeLife";
import Background from "../images/SpecacVR/blackwhiteBG.png";
import BackgroundResearch from "../images/SpecacVR/oculusBG.jpg";
import Bullet from "../images/icons/bullet.png";
import CustomCard from "../components/CustomCard";
import Unity1 from "../images/SpecacVR/unity1.png";
import Eyes from "../images/SpecacVR/headsetEyes.png";

import ExperienceMap1 from "../images/SpecacVR/experienceMapVR1.png";
import ExperienceMap2 from "../images/SpecacVR/experienceMapVR2.png";
import ExperienceMap3 from "../images/SpecacVR/experienceMapVR3.png";
import ExperienceMap4 from "../images/SpecacVR/experienceMapVR4.png";
import NavWhite from "../components/NavWhite";
import Logo from "../images/SpecacApp/logo.png";
import OculusHeadset from "../images/SpecacVR/oculusHeadset.png";
import Noughts from "../images/background/noughts.svg";
import VRPoint from "../components/VRPoint";
import SubHeader2 from "../components/SubHeader2";


const SpecacApp = (props) => {
  return (
    <BodyBackgroundColor backgroundColor="white">
      <Container>
        <Row>
          <div style={styles.caseColumn2}>
            <NavWhite style={styles.vrNav} />
            <Col>
              <div style={styles.slump}>
                <ReimagineDemo
                  title={"Re-imagine the product demo"}
                  text1={
                    "Researched, wireframed and developed a virtual reality app. Iterated over three devices, including unreleased technology. Refined experience following usability tests and interviews."
                  }
                  image={Eyes}
                />
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <Col style={styles.card} sm={{ size: 12, offset: 0 }}>
            <CustomCard
              logo={Logo}
              text="Specac Ltd are an infrared analytical device developer and Queen’s Award winner. They continue to innovate and set their sights on an ambitious growth plan."
            />
          </Col>
          <Col style={styles.VRSci}>
            <IntroCase2
              titleText={"Virtual Reality for science"}
              text1={
                "Specac saw a fall in engagement at trade shows globally. It was also proving expensive and time-consuming to introduce international partners to key analytical products due to shipping. Our ethnographic research and opportunity scouting identified a VR 'virtual lab' as a suitable attraction for trade shows and an efficient tool to remotely demo  key products."
              }
              video={
                "https://player.vimeo.com/video/435066189?autoplay=1&loop=1"
              }
              width={"360"}
              height={"202.5"}
            />
          </Col>
        </Row>

        <Row>
          <Col style={styles.projectTitle}>
            <div>
              <Title text={"From concept to final build"} />
            </div>
          </Col>
        </Row>
        <Row style={styles.bodyProject}>
          <Col xs="12" lg="6">
            <Body
              text={
                "I led the design and development of this project. I liaised with Engineering for CAD models and our Spectroscopist for technical soundness."
              }
            />
          </Col>
          <Col xs="12" lg="6">
            <Body
              text={
                "I began with sketches and user flows. Then I developed rough prototypes in Unity. Online release channel testing was followed by in-person usability playtesting."
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
                  <Body text={"increased trade show engagement"} />
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
                  <Body
                    text={
                      "successfully train partners and customers in key products via VR"
                    }
                  />
                </div>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12">
            <img style={styles.unity1} src={Unity1} />
          </Col>
        </Row>
        <Row>
          <div style={styles.caseColumn3}>
            <Col>
              <PrototypeLife
                title={"Prototype lifecycle"}
                text1={
                  "Two popular products were elected for the first build. The Pearl (a liquids analyser) and the Apex (a die that holds samples for compression). I mapped storyboards for each activity. Then I sketched wireframes based on our experience maps."
                }
                text2={
                  "I built a working prototype for the Google Cardboard using Unity. This was tested internally. I then chose the Oculus Go to be our headset. It is wireless and low cost. And the Oculus portal lets you install apps remotely."
                }
                image={ExperienceMap1}
                image2={ExperienceMap2}
                image3={ExperienceMap3}
                image4={ExperienceMap4}
              />
            </Col>
          </div>
        </Row>
        <Row>
          <Col style={styles.projectTitle}>
            <Title text={"USABILITY IN VR"} />
          </Col>

          <Col xs="12">
            <VRPoint text={"Session duration"} />
            <Body
              text={
                "I kept this short for comfort. It was also convenient for increasing trade show footfall and preserving battery life. Furthermore, shorter sessions meant more products could be promoted in less time."
              }
            />
            <VRPoint text={"Rest positions"} />
            <Body
              text={
                "The user only needs to perform quick interactions, then can rest the arms."
              }
            />
            <VRPoint text={"Optimise for short load times"} />
            <Body
              text={
                "I split the activities to keep levels small. I also prevented movement to allow for stripping meshes out of view"
              }
            />
            <VRPoint text={"Learned comfort"} />
            <Body
              text={
                "I recruited playtesters regularly as I had became too familiar with VR to be reliable."
              }
            />
            <VRPoint text={"Design to comfortable distances"} />
            <Body
              text={
                "I iterated a lot to ensure interactive objects and UI were within a natural reaching distance."
              }
            />
            <VRPoint text={"Critical UI in immediate line of sight"} />
            <Body
              text={
                "I kept instructions and interactive elements up front and clear"
              }
            />
            <VRPoint text={"Locomotion and discomfort"} />
            <Body
              text={
                "I avoided all locomotion and kept the lab experience static. Movement could cause issues at a trade show anyway."
              }
            />
            <VRPoint text={"Buttons"} />
            <Body text={"Buttons respond visually to focus and selection."} />
            <VRPoint text={"Onboarding"} />
            <Body
              text={
                "Users would use this app quickly with little training, so I avoided hand gesture controls and stuck to plain old point-and-click."
              }
            />
            <VRPoint text={"User tests & interviews"} />
            <Body
              text={
                "I followed the 'FFWWDD' question process after reading Shawn Patton’s 'The Defin­i­tive Guide to Playtest Questions'."
              }
            />
            <a
              target="_blank"
              href="https://www.schellgames.com/blog/the-definitive-guide-to-playtest-questions/"
            >
              <Body text={"Read it here."} />
            </a>
          </Col>
        </Row>
        <div style={styles.caseColumnOculus}></div>
        <Row style={styles.listPivot}>
          <Col xs="12" md="8">
            <Title text={"Listening and pivoting"} />
          </Col>
          <Col xs="12" md="10" xl="8">
            <Body
              text={
                "We received our first round of feedback from real users at a Dubai trade show. The Go's resolution was low, it could not be cast onto a screen (easily) and the controller was awkward. I later learned a new Oculus headset was on the way, the Quest."
              }
            />
          </Col>
          <Col xs="12" md="10" lg="9" xl="7">
            <Body
              text={
                "The Quest wasn't available when I started development, but as it used the same utilities as the Oculus Rift I could start building."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="9" lg="7" xl="5">
            <Body
              text={
                "I tested a Beta prototype on the Quest at an open day on the Specac site. Over a hundred visitors used the app. I recorded every session and made notes. 70% encountered no issues. Usability issues that did occur were simple fixes."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="7" lg="6" xl="4">
            <Body
              text={
                "We had great reception on the visuals and screen casting provided a shared experience for those who weren't in VR. A 'hold to quit' option and improved instructions reduced usability issues."
              }
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12" style={styles.lastCol}>
            <Title text={"The outcome"} />
            <Body
              text={
                "We saw a rise in footfall at subsequent shows of around 30%, clearly attributed to users trying out a new VR experience. After using the app, visitors would stay at booths to talk which indicated the experience successfully nurtured customers. This means the quality of footfall was also increased."
              }
            />
            <Body
              text={
                "It was a major success at the open day. Journalists, senior partners and investors lined up to trial the exciting virtual reality experience."
              }
            />
            <Body
              text={
                "We were able to share the VR experience through online conferences. We were also able to install the app remotely onto partner headsets using their email address."
              }
            />
          </Col>
        </Row>
      </Container>
    </BodyBackgroundColor>
  );
};

const styles = {
  VRSci: {
    marginTop: "10%",
  },
  unity1: {
    width: "100%",
  },
  listPivot: {
    marginTop: "20%",
  },
  lastCol: {
    marginTop: "50%",
    marginBottom: "10%",
  },
  overflow: {
    width: "100%",
    paddingTop: "5%",
  },
  slump: {
    marginTop: "25%",
  },
  slump2: {
    marginTop: 200,
  },
  caseColumn2: {
    backgroundImage: `url(${Background})`,
    width: "100vw",
    height: 1300,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    display: "block",
    marginBottom: "10%",
  },
  caseColumn3: {
    backgroundImage: `url(${BackgroundResearch})`,
    width: "100vw",
    overflow: "hidden",
    height: 1180,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    display: "block",
    marginTop: "20%",
  },
  caseColumnOculus: {
    backgroundImage: `url(${OculusHeadset})`,
    width: "100vw",
    overflow: "hidden",
    height: 1050,
    position: "absolute",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    marginTop: "10%",
    display: "block",
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
    paddingTop: "15%",
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
  tweet: {
    marginTop: "2%",
    width: "100%",
  },
  quest: {
    width: "100%",
    paddingTop: "2%",
  },
};

export default SpecacApp;
