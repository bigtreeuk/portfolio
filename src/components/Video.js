import React from 'react';

const Video = (props) => {
  // mask the video in a div with a border radius that hides the white corners?
  // also could potentially make the video longer at the bottom so the player 
  // controls are there, then mask that bottom with the div too
    return (
      <div style={styles.videoWrapper}>

          <iframe
          style={styles.iframe}
            src={props.video}
            width={props.width}
            height={props.height}
            frameborder="0"
            allow="autoplay; fullscreen; loop"
          ></iframe>

      </div>
    );

}
const styles = {
  iframe: {
     position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,

    height: 0,
  },
};

export default Video;