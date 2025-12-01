const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            <span class="text">${task.text}</span>
            <div class="buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Toggle completed
        li.querySelector(".text").addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        });

        // Delete
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        // Edit
        li.querySelector(".edit-btn").addEventListener("click", () => {
            const newText = prompt("Edit your task:", tasks[index].text);
            if (newText !== null && newText.trim() !== "") {
                tasks[index].text = newText.trim();
                saveTasks();
                displayTasks();
            }
        });

        taskList.appendChild(li);
    });
}

// Add Task
addBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") return;

    tasks.push({
        text: taskInput.value.trim(),
        completed: false
    });

    taskInput.value = "";
    saveTasks();
    displayTasks();
});

// Initial Display
displayTasks();
