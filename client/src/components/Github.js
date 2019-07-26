import React from "react";
import GithubImg from "../Images/github.png";

// This component does not require state, nor does it use
// the lifecycle hooks. Do not use a class here, make it a 
// dumb component.
class Github extends React.Component {
  render() {
    return (
      <img
        src={GithubImg}
        alt="github-img"
        style={{ borderRadius: "10%", marginLeft: "25%" }}
      />
    );
  }
}

export default Github;
