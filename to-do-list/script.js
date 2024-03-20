// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for adding tasks
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create a new task element
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

