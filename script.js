let navAbout = document.getElementById("nav-about");
let navProducts = document.getElementById("nav-products");
let navDelivery = document.getElementById("nav-delivery");

navAbout.addEventListener('click', () => {document.getElementById("about-us").scrollIntoView({block: "center"})});
navProducts.addEventListener('click', () => {document.getElementById("products").scrollIntoView({block: "center"})});
navDelivery.addEventListener('click', () => {document.getElementById("delivery").scrollIntoView({block: "center"})});