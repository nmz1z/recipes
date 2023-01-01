let navLearn = document.getElementById("nav-learn");
let navRecipes = document.getElementById("nav-recipes");
let navDelivery = document.getElementById("nav-about-us");

navLearn.addEventListener('click', () => {document.getElementById("learn").scrollIntoView({block: "center"})});
navRecipes.addEventListener('click', () => {document.getElementById("recipes").scrollIntoView({block: "center"})});
navDelivery.addEventListener('click', () => {document.getElementById("about-us").scrollIntoView({block: "center"})});
