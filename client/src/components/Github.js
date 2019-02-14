import React from "react";
import GithubImg from "../Images/github.png";

class Github extends React.Component {
  render() {
    return (
      <img src={GithubImg} style={{ borderRadius: "10%", marginLeft: "25%" }} />
    );
  }
}

export default Github;
