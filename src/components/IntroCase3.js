import React from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "./Title";
import SubHeader from "./Subheader";
import Video from "./Video";

const IntroCase3 = (props) => {
  return (
    <div>
      <Container style={styles.container}>
        <Row>
          <Col xs="12">
            <div style={styles.text2}>
              <Title text={props.titleText} />
            </div>
          </Col>
          <Col style={styles.text2} xs="12" md="12">
            <div style={styles.text2}>
              <SubHeader text={props.text1} />
            </div>
            <div style={styles.text2}>
              <SubHeader text={props.text2} />
            </div>
            <div style={styles.text2}>
              <SubHeader text={props.text3} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  card: {
    marginBottom: "15%",
  },
  lines: {
    position: "absolute",
  },
  container: {
    marginBottom: "4%",
  },
  hero: {
    backgroundSize: "cover",
    width: "100%",
    position: "relative",
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
    paddingTop: "3%",
  },
  text2: {
    paddingTop: "3%",

  },
  textMob: {
    paddingBottom: "10%",
  },
  titleText: {
    position: "absolute",
    bottom: "-20%",
  },
  video: {},

  lines: {
    width: "100%",
  },
  image: {
    width: "50%",
  },
  cardboard: {
    width: "100%",
  },
};

export default IntroCase3;
