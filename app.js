// app.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const errorMessage = document.getElementById('error-message');

    // Add task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskValue = taskInput.value.trim();

        if (validateTask(taskValue)) {
            addTask(taskValue);
            taskInput.value = ''; // clear the input field
            errorMessage.classList.add('d-none');
        } else {
            showErrorMessage();
        }
    });

    // Validate task input (arrow function)
    const validateTask = task => task.length > 0;

    // Show error message
    const showErrorMessage = () => {
        errorMessage.classList.remove('d-none');
    };

    // Add task to list (arrow function)
    const addTask = task => {
        const li = document.createElement('li');
        li.className = 'list-group-item';

        li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;

        // Add delete functionality (arrow function)
        li.querySelector('.delete-btn').addEventListener('click', () => li.remove());

        taskList.appendChild(li);
    };
});
