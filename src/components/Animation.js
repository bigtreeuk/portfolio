import React, { useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { gsap, SteppedEase } from "gsap";
import Background from '../images/eye/background.svg';
import Gear from '../images/eye/gear.svg';
import SpriteSheet from '../images/eye/spritesheet.svg';
import BackgroundMob from "../images/eye/background-mob.svg";
import GearMob from "../images/eye/gear-mob.svg";
import SpriteSheetMob from "../images/eye/spritesheet-mob.svg";

const Animation = () => {

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };


useEffect(() => {
                  gsap.to("#gear", 8, {
                    rotation: 360,
                    ease: "none",
                    repeat: -1,
                  });
                  // method 1 ( div background position ) :
                  gsap.to("#eye", 2, {
                    repeatDelay: 1,
                    repeat: -1,
                    backgroundPosition: "-3800px",
                    ease: SteppedEase.config(19),
                  });
                  // method 1 mobile ( div background position ) :
                  gsap.to("#eyeMob", 2, {
                    repeatDelay: 1,
                    repeat: -1,
                    backgroundPosition: "-1900px",
                    ease: SteppedEase.config(19),
                  });

                  window.addEventListener("resize", updateWidthAndHeight);
                  return () =>
                    window.removeEventListener("resize", updateWidthAndHeight);
                });

    return (
      <Container>
        {width >=
          600 ? (
            <Row>
              <Col>
                <div style={styles.container}>
                  <div id={"gearContainer"} style={styles.gearContainer}>
                    <div id={"gear"} style={styles.gear} />
                  </div>
                  <div id={"eye"} style={styles.eye} />
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div style={styles.containerMob}>
                  <div id={"gearContainer"} style={styles.gearContainerMob}>
                    <div id={"gear"} style={styles.gearMob} />
                  </div>
                  <div id={"eyeMob"} style={styles.eyeMob} />
                </div>
              </Col>
            </Row>
          )
        } 
      </Container>
    );
};

const styles = {
  container: {
    width: 200,
    height: 200,
    backgroundImage: `url(${Background})`,
    display: "block",
  },
  gearContainer: {
    width: 200,
    height: 200,
    position: "absolute",
  },
  gear: {
    width: 68,
    height: 68,
    backgroundImage: `url(${Gear})`,
    position: "absolute",
    top: "60%",
    left: "7.5%",
  },
  eye: {
    width: 200,
    height: 200,
    position: "absolute",
    backgroundImage: `url(${SpriteSheet})`,
  },
  containerMob: {
    width: 100,
    height: 100,
    backgroundImage: `url(${BackgroundMob})`,
    display: "block",
    marginLeft: "15%",
    marginTop: "30%"
  },
  gearContainerMob: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  gearMob: {
    width: 34,
    height: 34,
    backgroundImage: `url(${GearMob})`,
    position: "absolute",
    top: "60%",
    left: "7.5%",
  },
  eyeMob: {
    width: 100,
    height: 100,
    position: "absolute",
    backgroundImage: `url(${SpriteSheetMob})`,
  },
};

export default Animation;
