import React from "react";

const SubHeader2 = (props) => {
  return (
    <div className="portSubHead" style={styles.subText}>
      {props.text}{" "}
    </div>
  );
};

const styles = {
  subText: {
    color: "#383A48",
  },
};

export default SubHeader2;
