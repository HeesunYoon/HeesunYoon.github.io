const imgList = [
  'https://github.com/nomadcoders/javascript-for-beginners/blob/master/img/0.jpeg?raw=true',
  'https://github.com/nomadcoders/javascript-for-beginners/blob/master/img/1.jpeg?raw=true',
  'https://github.com/nomadcoders/javascript-for-beginners/blob/master/img/2.jpeg?raw=true'
];

const todayImg = imgList[Math.floor(Math.random()*imgList.length)];
const img = document.createElement('img');
img.src = todayImg;

document.getElementById("backgroundImg").appendChild(img);
