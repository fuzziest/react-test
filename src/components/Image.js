import React from 'react';
import { connect } from 'react-redux';

const Image = ({ imgUrl, imgTitle }) => {
  return <img src={imgUrl} alt={imgTitle} />;
};

// здесь reselect не нужен

const mapStateToProps = (state) => {
  const { randomImageData } = state;
  if (randomImageData) {
    const imgTitle = randomImageData.title || randomImageData.id;
    return { imgUrl: randomImageData.url, imgTitle };
  } else return { imgUrl: '', imgTitle: '' };
};

export default connect(mapStateToProps)(Image);
