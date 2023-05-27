"use strict";

//INPUT BOARD

const userName = document.querySelector(".userName");
const userEmail = document.querySelector(" .userEmail");
const userMessage = document.querySelector(" .userMessage");

//left output

const outputName = document.querySelector(".enterName");
const outputMail = document.querySelector(".enterMail");
const outputMessage = document.querySelector(".enterMessage");

addEventListener("submit", (event) => {
  event.preventDefault();
  outputName.placeholder = userName.value;
  outputMail.placeholder = userEmail.value;
  outputMessage.placeholder = userMessage.value;
});

