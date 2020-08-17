import React from "react";

const WhiteBody = (props) => {
  return (
    <div className={"portBody"} style={styles.text}>
      {props.text}
    </div>
  );
};

const styles = {
  text: {
    color: "white",

  },
};

export default WhiteBody;
