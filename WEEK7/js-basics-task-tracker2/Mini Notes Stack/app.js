// Get references once
const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const noteList = document.getElementById("noteList");
const emptyMsg = document.getElementById("emptyMsg");

// Add Note
addBtn.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") {
    alert("Please enter a note!");
    return;
  }

  // Hide empty message if showing
  emptyMsg.style.display = "none";

  // Append new note
  const p = document.createElement("p");
  p.className = "note";
  p.innerText = text;
  noteList.appendChild(p);

  // Reset input
  input.value = "";
  input.focus();
});

// Clear All
clearBtn.addEventListener("click", function () {
  noteList.innerHTML = "";
  noteList.appendChild(emptyMsg);
  emptyMsg.style.display = "block";
});
