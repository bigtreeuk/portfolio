import React from "react";

const Body = (props) => {
  return (
    <div className={"portBody"} style={styles.text}>
      {props.text}
    </div>
  );
};

const styles = {
  text: {
    color: "#383A48",
    paddingTop: "2%"
  },
};

export default Body;
