import React from "react";

const SubHeader = (props) => {
  return <div className="portBody" style={styles.subText}>{props.text} </div>;
};

const styles = {
  subText: {

    color: "#383A48",

  },
};

export default SubHeader;