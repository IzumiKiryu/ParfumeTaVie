//Images + Points
let carousel1 = document.querySelectorAll("img");
let carousel2 = document.querySelectorAll("img");
let carousel3 = document.querySelectorAll("img");


let point1 = document.querySelectorAll("span");
let point2 = document.querySelectorAll("span");
let point3 = document.querySelectorAll("span");




//Images Carousel non affichées
carousel2[4].style.display = "none";
carousel3[5].style.display = "none";






//Points défilement Carousel

point2[1].addEventListener("click", function(){

    carousel2[4].style.display = "block";
    carousel1[3].style.display = "none";
    carousel3[5].style.display = "none";

});
point3[2].addEventListener("click", function(){

    carousel3[5].style.display = "block";
    carousel2[4].style.display = "none";
    carousel1[3].style.display = "none";

});
point1[0].addEventListener("click", function(){

    carousel1[3].style.display = "block";
    carousel2[4].style.display = "none";
    carousel3[5].style.display = "none";

});
