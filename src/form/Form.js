/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import url from './api';

function Meme() {
  const [imageURL, setImageUrl] = useState({
    image: 'http://i.imgflip.com/1bij.jpg',
    topText: '',
    bottomText: '',
  });
  const changeImage = () => {
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
    const number = Math.floor(Math.random() * 101);
    setImageUrl({
      image: url[number].url,
      topText: topText.value,
      bottomText: bottomText.value,
    });
  };
  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top-Input" id="top-text" />
        <input className="form-input" type="text" placeholder="Bottom-Input" id="bottom-text" />
        <button className="form-button" type="button" onClick={changeImage}>Get a new Image &#128512;</button>
      </div>
      <div className="image">
        <img className="api-image" src={imageURL.image} alt="url" />
        <div className="Top-Text">{imageURL.topText}</div>
        <div className="Bottom-Text">{imageURL.bottomText}</div>
      </div>
    </main>
  );
}

export default Meme;
