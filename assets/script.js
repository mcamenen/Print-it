const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables

let nombreImages = slides.length
i = 0

// Ajout des event listeners sur les flèches gauche et droite

const slideLeft = document.getElementById('slide-left');
slideLeft.addEventListener('click', previousSlide);

const slideRight = document.getElementById('slide-right');
slideRight.addEventListener('click', nextSlide);

// Ajout des bullet points suivant le nb d'images

for (let i=0; i<nombreImages; i++) {

	let dot = document.createElement("div")
	dot.classList.add("dot")
	let dots = document.querySelector(".dots")
	dots.appendChild(dot)

}

// création du point blanc (dot_selected)

dot = document.querySelectorAll(".dot")
dot[i].classList.add("dot_selected")


// Création d'une image accompgnée de son texte

function buildImage() {
	
	let bannerImg = document.querySelector(".banner-img");
	let bannerP = document.querySelector("#banner p");
  
	bannerImg.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	bannerP.innerHTML = slides[i].tagLine;
  }

// Mise en place du mouvement gauche droite

  function previousSlide() {
	
	//console.log("slide d'avant")

	dot[i].classList.remove("dot_selected");
	
	if (i == 0) {
	  i = nombreImages - 1;
	} 
	
	else {
	  i--;
	}

	dot[i].classList.add("dot_selected");

	buildImage();

  }
  
  function nextSlide() {

	//console.log("slide d'après")

	dot[i].classList.remove("dot_selected");

	if (i == nombreImages - 1) {
	  i = 0;
	} 
	
	else {
	  i++;
	}

	dot[i].classList.add("dot_selected");
	
	buildImage();

  }
