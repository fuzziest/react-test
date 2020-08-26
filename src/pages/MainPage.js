import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRandomImage } from '../redux';
import Image from '../components/Image';

const MainPage = ({ getRandomImage }) => {
  useEffect(() => {
    getRandomImage();
  }, [getRandomImage]);

  return (
    <main className="main-page">
      <div className="title">Главная</div>
      <Image />
      <button onClick={getRandomImage}>Загрузить</button>
    </main>
  );
};

export default connect(null, { getRandomImage })(MainPage);
