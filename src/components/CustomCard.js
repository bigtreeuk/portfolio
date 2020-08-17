import React from "react";
import { Container, Row, Col } from "reactstrap";
import Body from "./Body";

const CustomCard = props => {


    return (
      <div style={styles.container}>
        <div style={styles.text}>
          <Container>
            <Row>
              <Col xs="12" md="5">
                <Body text={props.text} />
              </Col>
              <Col xs="12" md={{size: 6, offset: 1}}>
                 <div style={styles.div}> 
                 <img style={styles.logo} src={props.logo} />
              </div>
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
        textAlign: "center",
        height: "100%",
        paddingBottom: "10%"
  },
  logo: {
        position: "relative",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "60%",
        height: "auto",
        margin: "auto",
        fontSize: 20,
        lineHeight: 28,
        padding: 15,
  },
  text: {
    paddingLeft: "3%",
    marginTop: "4%",

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