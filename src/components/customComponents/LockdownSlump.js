import React from "react";
import WhiteTitle from '../WhiteTitle';
import WhiteBody from '../WhiteBody';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const LockdownSlump = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col style={styles.body} xs="9" md={{ size: 7 }}>
            <WhiteTitle style={styles.title} text="Lockdown Slump" />
            <WhiteBody text="During the Covid-19 pandemic, there was a shortage of groceries across the UK. And Brakes suffered a fall in profits as Hospitality closed its doors." />
          </Col>
        </Row>
        <Row>
          <Col style={styles.body} xs="9" md={{ size: 6 }}>
            <WhiteBody text="The business aimed to address both concerns by quickly entering the consumer market with a new website. But technical restrictions meant users would need to register before browsing fully, a major UX hurdle." />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  button: {
    width: "100%",
    height: "100%"
  },
 
  title: {

  },
  body: {
    marginTop: "2%"
  }
};

export default LockdownSlump;
