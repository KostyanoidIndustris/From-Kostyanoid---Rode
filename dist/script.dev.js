//@ts-check
"use strict";

document.querySelectorAll('.txt').forEach(function (e) {
  var chars = e.textContent.split("");
  e.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
});
var phrases = [{
  image: 'Для Роди/img/в сайте/pablo-martinez-Ja7IFmlmKd8-unsplash/1.jpg'
}, {
  image: 'Для Роди/img/в сайте/malusi-msomi-iQnfEpUG8nM-unsplash/2.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-saimon-8253060/3.jpg'
}, {
  image: 'Для Роди/img/в сайте/zan-1BWBiUUT-AA-unsplash/4.jpg'
}, {
  image: 'Для Роди/img/в сайте/serjan-midili-2YNsCr5nBXk-unsplash/5.jpg'
}, {
  image: 'Для Роди/img/в сайте/jon-koop-khYVyHiNZo0-unsplash/6.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-david-kretschmann-9708416/7.jpg'
}, {
  iage: 'Для Роди/img/в сайте/joren-goessens-3HtpbdeZ_i8-unsplash/8.jpg'
}, {
  image: 'Для Роди/img/в сайте/malusi-msomi-Xp__MGsQga8-unsplash/9.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-erik-mclean-9846101/10.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-vitaly-vlasov-8340650/11.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-jacob-moore-11110397/12.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-piccinng-5629048/13.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-jae-park-3849547/14.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-matt-weissinger-8947045/15.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-jacob-moore-11110518/16.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-stephan-louis-5381501/17.jpg'
}, {
  image: 'Для Роди/img/в сайте/martin-katler-94lAQc7ipNg-unsplash/18.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-jacob-moore-11110411/19.jpg'
}, {
  image: 'Для Роди/img/в сайте/leon-seibert-1RiyAwNIiew-unsplash/20.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-roberto-nickson-3166786/21.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-matúš-burian-6747401/22.jpg'
}, {
  image: 'Для Роди/img/в сайте/alex-dorcioman-Mlxqo9b0J4A-unsplash/23.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-erik-mclean-9846134/24.jpg'
}, {
  image: 'Для Роди/img/в сайте/dmitry-timofeew-UU18rjWiQmo-unsplash/25.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-matúš-burian-6740945/26.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-piccinng-3923524/27.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-trace-constant-707046/28.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-shivam-maurya-7051330/29.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-piccinng-3923522/30.jpg'
}, {
  image: 'Для Роди/img/в сайте/roberto-nickson-zu95jkyrGtw-unsplash/31.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-stephan-louis-7012890/32.jpg'
}, {
  image: 'Для Родиimg/в сайте/rodan-can-6cqJPeTIuls-unsplash/33.jpg'
}, {
  image: 'Для Роди/img/в сайте/roman-khripkov-PzCGId2ljsY-unsplash/34.jpg'
}, {
  image: 'Для Роди/img/в сайте/pexels-jae-park-3849553/35.jpg'
}];

function getRandomElement(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

var button = document.querySelector('.button');
var phrase = document.querySelector('.phrase');
var advice = document.querySelector('.advice');
var image = document.querySelector('.image');
button.addEventListener('click', function () {
  var randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
var array;

for (var i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}

function smoothly(phrase, arg1, text) {
  throw new Error("Function not implemented.");
}

jQuery(document).ready(function ($) {
  var bArray = [];
  var sArray = [4, 6, 8, 10];

  for (var i = 0; i < document.querySelector('.bubbles').width(); i++) {
    bArray.push(i);
  }

  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setInterval(function () {
    var size = randomValue(sArray);
    document.querySelector('.bubbles').insertAdjacentHTML("beforeend", '<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    document.querySelector('.individual-bubble').animate({
      'bottom': '100%',
      'opacity': '-=0.7'
    }, 3000, function () {
      document.querySelector(this).remove();
    });
  }, 350);
});