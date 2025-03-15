const readline = require("readline");

let tasks = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a task
function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

// Read all tasks
function viewTasks() {
    return tasks;
}

// Update a task
function updateTask(id, updatedTask) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        return true;
    } else {
        return false;
    }
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Function to handle user input
function handleUserInput() {
    rl.question("Choose an action: add, view, update, delete, or exit: ", (action) => {
        if (action === "add") {
            rl.question("Enter task id, name, and description separated by commas: ", (input) => {
                const [id, name, description] = input.split(",");
                addTask(Number(id), name.trim(), description.trim());
                console.log("Task added:", viewTasks());
                handleUserInput();
            });
        } else if (action === "view") {
            console.log("Tasks:", viewTasks());
            handleUserInput();
        } else if (action === "update") {
            rl.question("Enter task id and updated name and description separated by commas: ", (input) => {
                const [id, name, description] = input.split(",");
                const success = updateTask(Number(id), { name: name.trim(), description: description.trim() });
                if (success) {
                    console.log("Task updated:", viewTasks());
                } else {
                    console.log("Invalid ID. No task found with the given ID.");
                }
                handleUserInput();
            });
        } else if (action === "delete") {
            rl.question("Enter task id to delete: ", (id) => {
                deleteTask(Number(id));
                console.log("Task deleted:", viewTasks());
                handleUserInput();
            });
        } else if (action === "exit") {
            rl.close();
        } else {
            console.log("Invalid action. Please choose add, view, update, delete, or exit.");
            handleUserInput();
        }
    });
}

// Start the interactive prompt
handleUserInput();