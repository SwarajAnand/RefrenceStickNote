// console.log("Working");

const textarea = document.getElementById("textarea");
const add = document.getElementById("add");
const container = document.getElementById("container");
const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("change", () => {
  let val = colorInput.value;
  textarea.style.backgroundColor = val;
});

add.addEventListener("click", () => {
  let text = textarea.value;

  createElement(text, colorInput.value);

  textarea.value = "";
});

const createElement = (text, color) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div>
    <span id="del">X</span>
  </div>

  You typed: ${text}
  `;

  div.classList.add("internalDivs");
  div.style.backgroundColor = color;
  console.log(div);
  container.append(div);
};

container.addEventListener("click", (e) => {
  if (e.target.innerHTML === "X") {
    e.target.parentElement.parentElement.remove();
    // e.target.parentElement.parentElement.style.display = "none";
  }
});

// container.addEventListener("click", (e) => {
//   console.log(e.target.parentElement.parentElement);
//   if (e.target.innerHTML == "X") {
//     e.target.parentElement.style.display = "none";
//   }
// });
