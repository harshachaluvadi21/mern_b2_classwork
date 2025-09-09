function showNote() {
  const input = document.getElementById("noteInput");
  const board = document.getElementById("board");
  board.innerText = input.value;
}

function makeBold() {
  const board = document.getElementById("board");
  board.style.fontWeight = "bold";
}

function tryHTML() {
  const board = document.getElementById("board");
  board.innerHTML = "<b>" + board.innerText + "</b>";
}

function clearNote() {
  const board = document.getElementById("board");
  board.textContent = "";
}
