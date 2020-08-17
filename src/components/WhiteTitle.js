import React from "react";

const WhiteTitle = (props) => {
  return (
    <div className={"portTitle"} style={styles.titleText}>
      {props.text}
    </div>
  );
};

const styles = {
  titleText: {
    color: "white",
    marginBottom: "3%"
  },
};

export default WhiteTitle;
