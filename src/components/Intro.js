import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Title from './Title';
import SubHeader2 from "./SubHeader2";
import Animation from "../components/Animation";

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
                     "I'm a UX problem-solver based in England. Currently designing at Brakes."
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
         </Container>
       );
            }
     


const styles = {
  container: {
    marginTop: "7.5%",
    marginBottom: "8%",
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