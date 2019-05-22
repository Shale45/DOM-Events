
let body = document.querySelector("body");
let button = document.getElementById("button");

button.onclick = function() {
  
  let img1 = document.getElementsByTagName("img")[0];
  let img2 = document.getElementsByTagName("img")[1];

  if (!img2.className) {
    img1.removeAttribute("class");
    img2.setAttribute("class", "hidden");
    button.textContent = "Run Mario Run !!!";
    body.style.animationPlayState = "paused";
  } else {
    img1.setAttribute("class", "hidden");
    img2.removeAttribute("class");
    button.textContent = "Stooop Mario !!!";
    body.style.animationPlayState = "running";
  }
}
