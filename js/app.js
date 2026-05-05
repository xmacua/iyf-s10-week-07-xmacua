import { loadState } from './state.js';
import { attachEventListeners, initializeUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initializeUI();
    attachEventListeners();
});
