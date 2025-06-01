import { initializeZones } from './zones.js';
import { setupControls } from './controls.js';
import { updateUI } from './ui.js';

// Ініціалізація проєкту при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    const zones = initializeZones();
    setupControls(zones);
    updateUI(zones);

    // Запуск генерації температури кожні 10 секунд
    setInterval(() => {
        initializeZones(); // Оновлення температури
        updateUI(zones);
    }, 10000);
});