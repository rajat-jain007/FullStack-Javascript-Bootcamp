// LINK ADDED (Pro Subscription)

const element = document.createElement("a");
element.innerHTML = "<a href =./index.html class=btn> Pro Subscription </a>";
const parent = document.querySelector(".nav-center div:nth-child(3)");
parent.appendChild(element);

// RECIPES ADDED

const element2 = document.createElement("a");
element2.innerHTML = "<a>Chinese (7)</a>";
const parent2 = document.querySelector(".tags-container div");
parent2.appendChild(element2);

// CARD ADDED

const newClass = document.createElement("div");
newClass.innerHTML =
  "<a class=recipe-text><img src=./img/dosa-masala-dosa.jpg><h5 class=recipe-name>Masala Dosa</h5><p class=recipe-disp>Prep : 25min | Cook : 25min</p></a>";
newClass.classList.add("card");
const addClass = document.querySelector(".recipe-gallery");
addClass.appendChild(newClass);

const pageFooter= document.querySelector(".page-footer a");
pageFooter.innerText = "Rajat"