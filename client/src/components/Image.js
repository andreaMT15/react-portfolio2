import React from "react";

const style = {
  images: {
    width: "250px",
    height: "250px",
    marginRight: "5px",
    marginTop: "15px",
    marginBottom: "15px",
    borderRadius: "20%"
  }
};

class Image extends React.Component {
  render(props) {
    return <img {...this.props} style={style.images} alt={this.props} />;
  }
}

export default Image;
