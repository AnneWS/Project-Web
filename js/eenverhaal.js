console.log('verhaal')
//Downloaden
// selecteerd het element wat je wilt
var download = document.querySelector('.download');
var get = document.querySelector('.download');

// toggle functie maakt een class
var addDownloading = function () {
  console.log(5);
  download.classList.toggle('downloaden');
  event.preventDefault();
}

// event wordt toegevoegd
get.addEventListener('click', addDownloading);

//Liken
// selecteerd het element wat je wilt
var likeUp = document.querySelector('section>a:nth-of-type(2)');
var up = document.querySelector('section>a:nth-of-type(1)');

// toggle functie maakt een class
var addLikeUp = function () {
  console.log(6);
  likeUp.classList.toggle('like');
  event.preventDefault();
}

// event wordt toegevoegd
up.addEventListener('click', addLikeUp);


//DisLiken
// selecteerd het element wat je wilt
var likeDown = document.querySelector('section>a:nth-of-type(1)');
var down = document.querySelector('section>a:nth-of-type(2)');

// toggle functie maakt een class
var addLikeDown = function () {
  console.log(7);
  likeDown.classList.toggle('dislike');
  event.preventDefault();
}

// event wordt toegevoegd
down.addEventListener('click', addLikeDown);