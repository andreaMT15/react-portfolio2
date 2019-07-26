import React from "react";

// Inline styles will not be useful in a responsive context.
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

// This component does not require state, nor does it use
// the lifecycle hooks. Do not use a class here, make it a
// dumb component.
//
// Is this component really necessary? There is nothing special
// that it does for the purpose of displaying an image.
class Image extends React.Component {
  render(props) {
    return <img {...this.props} style={style.images} alt={this.props} />;
  }
}

export default Image;
