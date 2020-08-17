import React from 'react';
import { Container, Row, Col } from "reactstrap";
import PDF from "../pdf/CVMichaelLever.pdf";
import '../index.css';
import {
  Collapse,
  Navbar,
  Nav,
  NavLink,
} from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavMenu = (props) => {

  return (
    <Container>
      <Navbar color="none" light expand="-xl">
        <Nav style={styles.container} navbar>
          <Row>
            <Col xs="3" style={styles.CV2}>
              <a style={styles.CV} className="navText" href="/">
                Home
              </a>
            </Col>
            <Col xs="3" style={styles.CV2}>
              <a
                target="_blank"
                style={styles.CV}
                className="navText"
                href="https://www.linkedin.com/in/michaeljosephlever"
              >
                LinkedIn
              </a>
            </Col>
            <Col xs="3" style={styles.CV2}>
              <a
                style={styles.CV}
                className="navText"
                href={PDF}
                target="_blank"
              >
                CV
              </a>
            </Col>
            <Col xs="3" style={styles.CV2}>
              <AnchorLink style={styles.CV} className="navText" href="#contact">
                Contact
              </AnchorLink>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  );
}

const styles = {
  container: {
    backgroundColor: "none",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5%",
    marginBottom: "3%",

    borderBottom: "solid",
    borderBottomWidth: 1.5,
  },
  CV: {
    fontSize: 20,
    color: "#383A48",
    textDecoration: "none"

  },
  CV2: {
    textAlign: "center",
    marginBottom: "1%",

    
  },
};

export default NavMenu;