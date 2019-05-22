
let chatDiv = document.getElementById("chat");
let message = document.getElementById("message");
let button = document.getElementById("button");

function insertMessage() {
  let p = document.createElement("p");
  p.textContent = message.value;

  chatDiv.appendChild(p);

  message.value = "";
};

button.onclick = function() {
  insertMessage();
};

message.onkeyup = function(event) {
  if(event.keyCode !== 13) {
    return;
  } else {
    insertMessage();
  }
};
