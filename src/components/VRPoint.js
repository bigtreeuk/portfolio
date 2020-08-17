import React from 'react';
import Point from '../images/SpecacVR/point.svg';
import SubHeader2 from "./SubHeader2";

const VRPoint = props => {

    return (
      <div style={styles.container}>
        <img style={styles.point} src={Point} />
        <div style={styles.pointText}>
          <SubHeader2 text={props.text} />
        </div>
      </div>
    );
}

const styles = {
    container: {

        paddingTop: "3%"
    },
  point: {
    
    height: 50,
  },
  pointText: {
    display: "inline-block",
    paddingLeft: "1%",

  },
};
export default VRPoint;