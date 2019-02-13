import React from "react";

const style = {
  images: {
    width: "300px",
    height: "300px",
    marginRight: "5px",
    marginTop: "10px",
    marginBottom: "8px"
  }
};

class Image extends React.Component {
  render(props) {
    return <img {...this.props} style={style.images} alt="" />;
  }
}

export default Image;
