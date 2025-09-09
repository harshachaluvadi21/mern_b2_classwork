
// Difficulty: medium


const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask"); // ── TEACHING-BUG #2 (logic) ──
const clearBtn = document.getElementById("clearAll");
const list = document.getElementById("taskList");
const count = document.getElementById("taskCount");


let tasks = [];


// ── TEACHING-BUG #5 (logic)
function addTask() {
 const task = input.value.trim();


 // ── TEACHING-BUG #6 (logic)


 // TODO: Push task to array
 if (task === "") return;
 if (tasks.includes(task)) return;
 tasks.push(task);



 renderTasks();
 input.value = "";
 input.focus();
}


// ── TEACHING-BUG #7 (logic) ──
function clearAllTasks() {
  tasks = [];
  renderTasks();
}



// Renders all tasks from the array
function renderTasks() {
 list.innerHTML = "";


 tasks.forEach((task) => {
   const li = document.createElement("li");
   li.className = "task-item";
   li.innerText = task;
   list.appendChild(li);
 });


 // ── TEACHING-BUG #8 (logic)
 // TODO: Update task count text here
 count.textContent = `You have ${tasks.length} tasks.`;

}


// ── TEACHING-BUG #9 (event)
document.addEventListener("keypress", function (e) {
 if (e.key === "Enter") {
    addTask();;
 }
});


// ── TEACHING-BUG #10 (intent)
// TODO: Prevent duplicate task names (optional)


addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);