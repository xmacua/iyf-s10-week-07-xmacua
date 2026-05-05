import { load, save } from './storage.js';
import { generateId } from './utils.js';

const STORAGE_KEY = 'appState';

const defaultState = {
    todos: [],
    filter: 'all',
    theme: 'light'
};

export const state = { ...defaultState };

export function loadState() {
    const savedState = load(STORAGE_KEY, defaultState);
    Object.assign(state, savedState);
}

export function saveState() {
    save(STORAGE_KEY, state);
}

export function setFilter(filter) {
    if (['all', 'active', 'completed'].includes(filter)) {
        state.filter = filter;
        saveState();
    }
}

export function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    saveState();
}

export function addTodo(text) {
    const trimmedText = text.trim();

    if (!trimmedText) {
        return;
    }

    const newTodo = {
        id: generateId(),
        text: trimmedText,
        completed: false,
        createdAt: new Date().toISOString()
    };

    state.todos = [...state.todos, newTodo];
    saveState();
}

export function toggleTodo(id) {
    state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveState();
}

export function deleteTodo(id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
    saveState();
}

export function clearCompleted() {
    state.todos = state.todos.filter(todo => !todo.completed);
    saveState();
}

export function getFilteredTodos() {
    if (state.filter === 'active') {
        return state.todos.filter(todo => !todo.completed);
    }

    if (state.filter === 'completed') {
        return state.todos.filter(todo => todo.completed);
    }

    return state.todos;
}

export function getRemainingCount() {
    return state.todos.filter(todo => !todo.completed).length;
}
