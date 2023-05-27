let element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>";
let parent = document.querySelector("header nav ul");
parent.appendChild(element);

// let val = document.querySelector("li");
// val[2].innerText = "Projects";

// let val1 =(document.querySelector("li[2]")="Projects");

const val2 = document.getElementsByTagName("li");
val2[2].innerText = "Projects";



