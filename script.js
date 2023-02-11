// Récupère la modal des images
var imgModal = document.getElementById("imgModal");

// Récupére les images et créer l'évenement d'agrandissement
var img = document.getElementsByClassName("bigImg");
var bigImg = document.getElementById("bigImg");
console.log(img)
for (let numImg = 0; numImg < img.length; numImg++) {
    const curImg = img[numImg];

    curImg.onclick = function(){
        imgModal.style.display = "block";
        bigImg.src = this.src;
    }
}
   
// Récupère la modal du carousel
var modalCarousel = document.getElementById("carouselModal"); 

// Récupére le carousel et créer l'évenement d'agrandissement
var carousel = document.getElementById("carousel");

carousel.onclick = function(){
    modalCarousel.style.display = "block";
}

// Récupére les boutons "X" des modals
var closeButton = document.getElementsByClassName("close");

// Quand l'utilisateur clique sur le "X", ferme les modals
for (let numClose = 0; numClose < closeButton.length; numClose++) {
    closeButton[numClose].onclick = function() {
        imgModal.style.display = "none";
        modalCarousel.style.display = "none";
    }
    
}

// Quand l'utilisateur clique en dehors de la modal, la ferme
window.onclick = function(event) {
    if (event.target == imgModal || event.target == modalCarousel) {
        imgModal.style.display = "none";
        modalCarousel.style.display = "none";
    }
}