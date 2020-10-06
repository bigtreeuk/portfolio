import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Title from './Title';
import SubHeader2 from "./SubHeader2";
import Animation from "../components/Animation";
import Javascript from "../images/icons/js.svg";
import ReactIcon from "../images/icons/react.svg";
import ReduxIcon from "../images/icons/redux.svg";

const Intro = props => {

       return (
         <Container style={styles.container}>
           <Row>
             <Col>
               <Title text={"Michael J. Lever"} />
             </Col>
           </Row>
           <Row>
             <Col xs="7" sm="6">
               <div style={styles.text}>
                 <SubHeader2
                   text={
                     "I'm a designer/developer based in England. Currently designing at Brakes and developing freelance."
                   }
                 />
               </div>
             </Col>
             <Col xs="5" sm="6">
               <div className={"float-right"} style={styles.animContainer}>
                 <Animation />
               </div>
             </Col>
           </Row>
           <Row>
             <Col style={styles.iconContainer} xs="4" lg="2">
               <img
                 alt="Javascript logo"
                 style={styles.icons}
                 src={Javascript}
                 title="Javascript"
               />
             </Col>
             <Col style={styles.iconContainer} xs="4" lg="2">
               <img
                 alt="React logo"
                 style={styles.icons}
                 src={ReactIcon}
                 title="React / React Native"
               />
             </Col>
             <Col style={styles.iconContainer} xs="4" lg="2">
               <img
                 alt="Redux logo"
                 style={styles.icons}
                 src={ReduxIcon}
                 title="Redux"
               />
             </Col>
           </Row>
         </Container>
       );
            }
     


const styles = {
  container: {
    marginTop: "7.5%",
    marginBottom: "8%",
  },
  iconContainer:{

  },
  icons: {
    width: "50%",
    marginTop: "15%"
  },
  text: {
    paddingTop: "10%",

  },
  textMob: {
    paddingBottom: "10%",
  },
  animationMob: {
    display: "block",
  },
  animContainer: {
    
  },
};

export default Intro;