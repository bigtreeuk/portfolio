import React from "react";

const Header = (props) => {
  return (
    <div className="portHead" style={styles.headText}>
      {props.text}
    </div>
  );
};

const styles = {
  headText: {

    color: "#383A48",
    marginBottom: "2.5%"

  },
};

export default Header;
