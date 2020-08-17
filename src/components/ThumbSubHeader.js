import React from "react";

const ThumbSubHeader = (props) => {
  return (
    <div className="thumbPortSubHead" style={styles.subText}>
      {props.text}
    </div>
  );
};

const styles = {
  subText: {
    color: "#383A48",
  },
};

export default ThumbSubHeader;
