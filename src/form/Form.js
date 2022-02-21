import React from 'react';

function Meme() {
  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top-Input" />
        <input className="form-input" type="text" placeholder="Bottom-Input" />
        <button className="form-button" type="button">Get a new Image &#128512;</button>
      </div>
    </main>
  );
}

export default Meme;
