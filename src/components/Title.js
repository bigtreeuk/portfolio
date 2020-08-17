import React from "react";

const Title = (props) => {
return (
  <div className={"portTitle"} style={styles.titleText}>
    {props.text}
  </div>
);
}



const styles = {
  titleText: {
    color: "#383A48",
  },

};

export default Title;

