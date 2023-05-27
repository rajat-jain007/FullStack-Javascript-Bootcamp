<h1>DOM Assignments Solutions</h1>

<details>
<summary>1st Assignment Task 1 </summary>

### Solution:-

---

```
let element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>";
let parent = document.querySelector("header nav ul");
parent.appendChild(element);

const val2 = document.getElementsByTagName("li");
val2[2].innerText = "Projects";
```

![](./1st_DOM_Assignment/First_Assignment_Task1/task1Output.png)

</details>

<details>
<summary>1st Assignment Task 2 </summary>

### Solution:-

---

```
const value = document.getElementsByTagName("li");
value[2].innerText = "Projects";
document.querySelector("input").placeholder = "Search My Project";
```

![](./1st_DOM_Assignment/First_Assignment_Task2/task2Output.png)

</details>

<details>
<summary>1st Assignment Task 3</summary>

### Solution:-

---

```
const value = document.getElementsByTagName("li");
value[2].innerText = "Projects";

const value2 = document.getElementsByTagName("span");
value2[2].innerText = "an Employee";
value2[3].innerText = "iNeuron Intelligence Pvt Ltd";

```

![](./1st_DOM_Assignment/First_Assignment_Task3/task3Output.png)

</details>

</details>

<details>
<summary>1st Assignment Task 4</summary>

### Solution:-

---

```
const value = document.getElementsByTagName("li");
value[2].innerText = "Projects";

document.querySelector("img").src = "./hitesh-modified.png";


```

![](./1st_DOM_Assignment/First_Assignment_Task4/task4Output.png)

</details>

<details>
<summary>1st Assignment Task 5</summary>

## Solution

---

```
let element = document.createElement("button");
element.innerText = "Support";
let parent = document.querySelector(".hero-right-section-btns");
parent.appendChild(element);



```

![](./1st_DOM_Assignment/First_Assignment_Task5/task5Output.png)

</details>

<details>
<summary>2nd Assignment Task 1</summary>

## Solution

---

```
let changeBackgroundColor = document.querySelectorAll("h3").forEach((value) => {
  value.style.backgroundColor = "skyblue";
});


```

![](./2nd_DOM_Assignment/Second_Assignment_Task1/task1Output.png)

</details>

<details>
<summary>2nd Assignment Task 2</summary>

## Solution

---

```
const newClass = document.createElement("div");
newClass.innerHTML = "<h3>Skills</h3>";
newClass.classList.add("accordian");
const addClass = document.querySelector(".accordian-wrapper");
addClass.appendChild(newClass);

const val = document.createElement("p");
val.innerHTML =
  "I posses a very good command over the Full Stack Development technologies like MERN which can be <br /> seen in my work over the Github";
newClass.appendChild(val);


```

![](./2nd_DOM_Assignment/Second_Assignment_Task2/task2Output.png)

</details>

<details>
<summary>3rd Assignment</summary>

## Solution

---

```
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


```

![](./3rd_DOM_Assignment/task1Output.png)

</details>

<details>
<summary>4th Assignment</summary>

## Solution:-

---

```
// SECTION BARBARIAN

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ed9c30";
document.querySelector(".clash-card__unit-stats--barbarian").style.color ="#fff";
document.querySelector(".clash-card__unit-stats--barbarian .one-third:nth-child(3)").style.color = "#fff";

// SECTION ARCHER
document.querySelector(".archer div:nth-child(3)").innerText = "The Archer";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#f81f83";
document.querySelector(".clash-card__unit-stats--archer").style.color = "#fff";
document.querySelector(".clash-card__unit-stats--archer .one-third:nth-child(3)").style.color = "#fff";

// SECTION GIANT
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor ="#f98f00";
document.querySelector(".clash-card__unit-stats--giant").style.color = "#fff";
document.querySelector(".clash-card__unit-stats--giant .one-third:nth-child(3)").style.color = "#fff";

// SECTION GOBLIN
document.querySelector(".goblin div:nth-child(3)").innerText = "The Goblin";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#6cc92d";
document.querySelector(".clash-card__unit-stats--goblin").style.color = "#fff";
document.querySelector(".clash-card__unit-stats--goblin .one-third:nth-child(3)").style.color = "#fff";

// SECTION WIZARD
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#5d9cff";
document.querySelector(".clash-card__unit-stats--wizard").style.color = "#fff";
document.querySelector(".clash-card__unit-stats--wizard .one-third:nth-child(3)").style.color = "#fff";

```

![](./4th_DOM_Assignment/Output/DOM%20P1%20SS.png)

</details>

<details>
<summary>5th Assignment</summary>

## Solution

---

```
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


```

![](./5th_DOM%20_assignment/Output/DOM%20P2%20SS.png)

</details>

<details>
<summary>6th Assignment</summary>

## Solution:-

---

![task-01](./6th_DOM%20assignment/Output/DOM%20P3%20SS-1.png)

```

// Task-01: add ineuron image and hide first image

// hide first image
document.querySelector(".logo").style.display = "none";
// target header to injecting ineuron image
let targetHeader = document.querySelector("header");
// create img tag and add image path
let createImg = document.createElement("img");
createImg.src = "./assets/ineuron-logo.png";
// append image into header
targetHeader.appendChild(createImg);
```

> ## Task-02: change prize premium section card

![task-02](./6th_DOM%20assignment/Output/DOM%20P3%20SS-2.png)

```
document.querySelector(".app_price span").innerHTML = "$10";
```

![](./3rd_DOM_Assignment/task1Output.png)

</details>

<details>
<summary>7th Assignment Task 1</summary>

## Solution

---

> ## Task-01:Remove the languages that have 2.0 in their name(Every alternative language)
>
> ![task-01](./7th_DOM%20assignment/ass7.1-after.png)

```
// Task-01: Remove the languages that have 2.0 in their name(Every alternative language)

const element = document.querySelectorAll(".main__languages a");
const val3 = document.querySelector(".main__languages");
console.log(element);

//  Using forEach loop

element.forEach(function (a) {
  if (a.innerText.includes("2.0")) {
    a.style.display = "none";
  }
});


```

</details>

<details>
<summary>7th Assignment Task 2</summary>

## Solution

---

> > ## Task-01: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.
> >
> > ![task-01](./7th_DOM%20assignment/otput-task-02.jpg)

```
document.querySelector(".main__form-input").disabled = false;
document.querySelector(".main__form-btn").disabled = false;

addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelector("input");
  const inputValue = input.value;
  console.log(inputValue);

  if (!inputValue) {
    this.alert("Please Enter your Input");
  }
  // Create Annchor Tag
  const createAnchorTag = document.createElement("a");
  //Create Attribute for the Anchor tag
  const createAttribute = document.createAttribute("href");
  // Set the Value of the Attribute
  createAttribute.value = "https://www.ineuron.ai";
  // Set the href attribute inside the Anchor Tag
  createAnchorTag.setAttributeNode(createAttribute);
  // Fetch the value from the input box and pass it inside anchor tag(createAnchorTag);
  createAnchorTag.innerText = inputValue;
  // Append the anchor tag inside (main__languages)
  val3.appendChild(createAnchorTag);
  // val3.innerHTML="target=_blank href=https://www.ineuron.ai"
  // const parent = document.querySelector(".main__languages")
  // parent.appendChild(val3)
});


```

</details>
