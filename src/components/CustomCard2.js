import React from "react";
import { Container, Row, Col } from "reactstrap";
import Body from "./Body";
import Logo from "../images/BrakesCaseStudy/brakesLogo.png";

const CustomCard = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <Container>
          <Row>
            <Col xs="12" >
              <Body text={props.text} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const styles = {
  div: {
    position: "relative",
    height: "100%",
  },
  text: {
    paddingLeft: "3%",
    marginTop: "1%",
    marginBottom: "3%",
  },
  container: {
    height: "auto",
    borderStyle: "solid",
    borderWidth: "4px",
    borderColor: "#46546D",
    backgroundColor: "#F6F7F8",
    boxShadow: "5px 5px 5px 0px #949493",
    marginTop: "5%",
  },
};

export default CustomCard;
