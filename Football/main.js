
let body = document.querySelector("body");
let button = document.getElementById("button");
let heading = document.querySelector("h1");

body.onclick = function movePlayer(event) {
  heading.style.display = "none";

  let player = document.getElementById("player");
  let x = event.clientX;
  let y = event.clientY;

  player.style.top = (y - player.width / 2) + "px";
  player.style.left = (x - player.width / 2) + "px";

}

button.onclick = function() {
  body.onclick = function movePlayer(event) {
    event.preventDefault();
  };
}