import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { Collapse, Navbar, Nav, NavLink } from "reactstrap";
import PDF from "../pdf/MichaelLeverCV.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavMenu = (props) => {
  return (
    <Container>
      <Navbar color="none" light expand="-xl">
        <Nav style={styles.container} navbar>
          <Row>
            <Col xs={{ size: 10, offset: 1 }} style={styles.navItems}>
              <a style={styles.navItem} className="navText" href="/">
                Home
              </a>

              <a
                target="_blank"
                style={styles.navItem}
                className="navText"
                href="https://www.linkedin.com/in/michaeljosephlever"
              >
                LinkedIn
              </a>

              <a
                style={styles.navItem}
                className="navText"
                href={PDF}
                target="_blank"
              >
                CV
              </a>

              <AnchorLink
                style={styles.navItem}
                className="navText"
                href="#contact"
              >
                Contact
              </AnchorLink>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "none",
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginTop: "5%",
    marginBottom: "3%",
    borderBottom: "solid",
    borderBottomWidth: 1.5,
    borderBottomColor: "white"
  },
  navItem: {
    fontSize: 20,
    color: "white",
    textDecoration: "none",
    display: "flex",
    textAlign: "center",
  },
  navItems: {
    display: "flex",
    marginBottom: "1%",
    justifyContent: "space-between",
  },
};

export default NavMenu;
