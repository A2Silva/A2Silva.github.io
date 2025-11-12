const images = ['bg01.jpg', 'bg02.jpg', 'bg03.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.querySelector('.background-layer').style.backgroundImage = `url('assets/images/${images[index]}')`;
}, 6000); // every 6 seconds

