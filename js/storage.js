const STORAGE_PREFIX = 'todo_app_';

export function save(key, data) {
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(data));
}

export function load(key, defaultValue = null) {
    const rawValue = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    return rawValue ? JSON.parse(rawValue) : defaultValue;
}

export function remove(key) {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
}
