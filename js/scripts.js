// window.onload = function() {
//   let h1 = document.querySelector("h1");
//   h1.onmouseover = function() {
//     window.alert("I am a heading element.");
//   };

//   let p = document.querySelector("p");

//   p.onmouseover = function() {
//     document.querySelector("p>em").innerText = "Don't be surprised";
//   };

//   let img = document.querySelector("img");

//   img.onmouseover = function() {
//     img.style.height = "700px";
//   };
// }
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.onload = function() {
  document.body.onmousemove = function() {
    let randomBGColor = randomColor();
    document.body.style.backgroundColor = randomBGColor;
  }
}

function randomColor() {
  // let body = document.querySelector("body");
  let first = getRandomInt(256);
  let second = getRandomInt(256);
  let third = getRandomInt(256);
  // let colorString = "rgb(" + first + ", " + second + ", " + third + ")";
  let colorString = `rgb(${first}, ${second}, ${third})`;
  return colorString;
}