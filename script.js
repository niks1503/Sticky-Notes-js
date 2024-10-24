let button = document.getElementById("button");
let button1 = document.getElementById("button1");
let parentDiv = document.getElementById("notes_div");
let color = document.getElementById("color");
let textAreaValue = document.getElementById("textArea");
let no_notes = document.getElementById("no_notes");

parentDiv.style.display = "flex";
parentDiv.style.flexDirection = "row";
parentDiv.style.gap = "20px";

function addNote() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let x_btn = document.createElement("button");

  div.style.minWidth = "100px";
  div.style.minHeight = "100px";

  p.innerText = textAreaValue.value;
  x_btn.innerHTML = "X";
  div.appendChild(x_btn);

  div.appendChild(p);

  div.style.background = color.value;

  parentDiv.appendChild(div);
  textAreaValue.value = "";

  x_btn.addEventListener("click", function () {
    parentDiv.removeChild(div);
    if (parentDiv.innerHTML === "") {
      no_notes.style.display = "block";
    }
  });

  no_notes.style.display = "none";
}

button.addEventListener("click", addNote);

button1.addEventListener("click", function () {
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  no_notes.style.display = "block";
});
