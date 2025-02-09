const todos = [];

function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodo(index);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';

        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');
        newTodo.classList.add('fade-in');
        newTodo.innerHTML = `
            <span>${todoText}</span>
            <button onclick="removeTodo(${todos.length - 1})">Remove</button>
        `;
        todoList.appendChild(newTodo);
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const button = document.getElementById('add-todo-button');

    button.addEventListener('click', addTodo);

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});