const url = [];

fetch(process.env.REACT_APP_MEME_API_URL)
  .then((response) => response.json())
  .then((body) => body.data.memes.forEach((image) => {
    url.push(image);
  }));

export default url;
