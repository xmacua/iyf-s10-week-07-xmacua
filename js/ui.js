import {
    state,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    clearCompleted,
    getFilteredTodos,
    getRemainingCount,
    toggleTheme
} from './state.js';
import { formatDate } from './utils.js';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const remainingCount = document.getElementById('remaining-count');
const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const clearCompletedButton = document.getElementById('clear-completed');
const themeToggle = document.getElementById('theme-toggle');

function updateTheme() {
    document.documentElement.dataset.theme = state.theme;
    themeToggle.textContent = state.theme === 'light' ? 'Dark mode' : 'Light mode';
}

function renderControls() {
    filterButtons.forEach(button => {
        const isActive = button.dataset.filter === state.filter;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function buildTodoItem(todo) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    if (todo.completed) {
        listItem.classList.add('completed');
    }
    listItem.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        renderTodos();
    });

    const textWrapper = document.createElement('div');
    textWrapper.className = 'todo-content';

    const textNode = document.createElement('p');
    textNode.className = 'todo-text';
    textNode.textContent = todo.text;

    const meta = document.createElement('div');
    meta.className = 'todo-meta';
    meta.textContent = `Created ${formatDate(todo.createdAt)}`;

    textWrapper.append(textNode, meta);

    const actions = document.createElement('div');
    actions.className = 'todo-actions';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id);
        renderTodos();
    });

    actions.append(deleteButton);
    listItem.append(checkbox, textWrapper, actions);
    return listItem;
}

export function renderTodos() {
    const todos = getFilteredTodos();
    todoList.innerHTML = '';

    if (todos.length === 0) {
        emptyState.style.display = 'block';
        remainingCount.textContent = String(getRemainingCount());
        renderControls();
        return;
    }

    emptyState.style.display = 'none';
    todos.forEach(todo => todoList.append(buildTodoItem(todo)));
    remainingCount.textContent = String(getRemainingCount());
    renderControls();
}

function handleFormSubmit(event) {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
    renderTodos();
    todoInput.focus();
}

function handleFilterClick(event) {
    const button = event.target.closest('.filter-button');
    if (!button) {
        return;
    }

    setFilter(button.dataset.filter);
    renderTodos();
}

function handleClearCompleted() {
    clearCompleted();
    renderTodos();
}

export function attachEventListeners() {
    todoForm.addEventListener('submit', handleFormSubmit);
    document.querySelector('.filter-group').addEventListener('click', handleFilterClick);
    clearCompletedButton.addEventListener('click', handleClearCompleted);
    themeToggle.addEventListener('click', () => {
        toggleTheme();
        updateTheme();
        renderTodos();
    });
}

export function initializeUI() {
    updateTheme();
    renderTodos();
}
