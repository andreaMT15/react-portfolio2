import React from 'react';

const style = {
  images: {
    width: '250px',
    height: '250px',
    marginRight: '5px',
    marginTop: '15px',
    marginBottom: '15px',
    borderRadius: '20%'
  }
};

const Image = props => {
  return <img {...props} style={style.images} alt={props} />;
};

export default Image;
