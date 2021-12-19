const images = ["about.jpg", "lala_land.jpg", "totoro.png"];
const imageNum = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `images/${imageNum}`;

document.body.appendChild(bgImage);
