import React from 'react';
import { Container, Row, Col } from "reactstrap";

import ThumbSubHeader from "./ThumbSubHeader";
import Header from "./Header";

const CaseStudyThumb = props => {
    return (

        
              <div className="thumbDiv" style={styles.container}>
                <img alt="thumbnail" src={props.thumb} style={styles.image} />
                <div style={styles.thumbText} className={"thumbText"}>
                  <Header text={props.title} />
                  <div className={"thumbSubText"}>
                    <ThumbSubHeader text={props.sub} />
                  </div>
                </div>
              </div>
           

    );
}

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    

  },
  image: {},
  title: {},
  thumbText: {
    textAlign: "left",
  },
};

export default CaseStudyThumb;