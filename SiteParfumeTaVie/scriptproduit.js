
let image1 = document.querySelectorAll("img"); //3 dior sauvage
let image2 = document.querySelectorAll("img");//4 sauvage parfum
let image3 = document.querySelectorAll("img");//5 petit sauvage
let image4 = document.querySelectorAll("img");//6 peit sauvage parfum

image2[3].style.display = "none";


image3[5].style.cursor = "pointer";
image4[6].style.cursor = "pointer";




image4[6].addEventListener("click", function(){

    image1[3].style.display = "none";
    image2[4].style.display = "block";

});



image3[5].addEventListener("click", function(){

    image2[4].style.display = "none";
    image1[3].style.display = "block";

});














    let buttonAfficher = document.querySelectorAll("img");
    buttonAfficher[13].style.cursor = "pointer";//13


    buttonAfficher[13].addEventListener("click", function(){

            document.getElementById("masquezAvis").style.display = "block";
        
    });


