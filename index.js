document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const clearBtn = document.getElementById("clearBtn");

    addBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText, false);
            taskInput.value = ""; // Clear the input field
        }
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            // Delete task
            e.target.parentElement.remove();
        } else if (e.target.tagName === "LI") {
            // Toggle completed status
            e.target.classList.toggle("completed");
        }
    });

    clearBtn.addEventListener("click", () => {
        taskList.innerHTML = ""; // Clear all tasks
    });

    const addTask = (task, isCompleted) => {
        const li = document.createElement("li");
        li.textContent = task;

        if (isCompleted) {
            li.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    };

    

    preloadedTasks.forEach(task => {
        addTask(task.text, task.completed);
    });
});
