const newClass = document.createElement("div");
newClass.innerHTML = "<h3>Skills</h3>";
newClass.classList.add("accordian");
const addClass = document.querySelector(".accordian-wrapper");
addClass.appendChild(newClass);

const val = document.createElement("p");
val.innerHTML =
  "I posses a very good command over the Full Stack Development technologies like MERN which can be <br /> seen in my work over the Github";
newClass.appendChild(val);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
