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

// Task-02: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

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

// Note: Another approach using for loop (Task-01)

/* // const element2 = document.getElementsByTagName("a");
// for(let i = 0; i< element2.length; i++){
//     if (element2[i].innerText.includes("2.0")){
//         element2[i].style.display = "none";
//     }
// } */
