console.log('Hey');

//filteren bron: codepen van joostf
// selecteerd het element wat je wilt
var filter = document.querySelector('fieldset:nth-of-type(1)');
var button = document.querySelector('form button');

// toggle functie maakt een class
var toggleFilter = function () {
  console.log(1);
  filter.classList.toggle('show');
  event.preventDefault();
}

// event wordt toegevoegd
button.addEventListener('click', toggleFilter);


//filteren met main meebewegen
// selecteerd het element wat je wilt
var verhaal = document.querySelector('main');
var button = document.querySelector('form button');

// toggle functie maakt een class
var toggleFilter = function () {
  console.log(3);
  verhaal.classList.toggle('omlaag');
  event.preventDefault();
}

// event wordt toegevoegd
button.addEventListener('click', toggleFilter);


//favorieten
// selecteerd het element wat je wilt
var favorieten = document.querySelector('footer>a:nth-of-type(2)');
var a = document.querySelector('footer>a:nth-of-type(2)');

// toggle functie maakt een class
var toggleFavorieten = function () {
  console.log(2);
  favorieten.classList.toggle('favoriet');
  event.preventDefault();
}

// event wordt toegevoegd
a.addEventListener('click', toggleFavorieten);


//Toegevoegde favoriet in lijst
// selecteerd het element wat je wilt
var lijstje = document.querySelector('header>nav>ul>li:nth-of-type(1)');
var a = document.querySelector('footer>a:nth-of-type(2)');

// toggle functie maakt een class
var toggleFavorieten = function () {
  console.log(4);
  lijstje.classList.toggle('added');
  event.preventDefault();
}

// event wordt toegevoegd
a.addEventListener('click', toggleFavorieten);