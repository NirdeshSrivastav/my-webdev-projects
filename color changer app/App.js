let btn = document.querySelector("button");
let body = document.querySelector("body");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  let color = getRandom();
  p.innerText = color;
  body.style.backgroundColor = color;
});

function getRandom() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
