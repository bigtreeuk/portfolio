import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../index.css";
import { NavLink } from "reactstrap";
import Back from "../images/icons/back.svg";

const BackButton = (props) => {
  return (
    <Container style={styles.container}>
          <Row>
            <Col>
              <NavLink
                className="portSubHead"
                href="/"
              >
              <img alt="back" src={Back}/>
              </NavLink>
            </Col>
          </Row>
    </Container>
  );
};

const styles = {
  container: {
      paddingBottom: "5%",
      
  },
};

export default BackButton;
