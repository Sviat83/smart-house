import { updateSensor, getZones } from './zones.js';
import { updateUI } from './ui.js';

// Налаштування обробки подій для кнопок
export function setupControls(zones) {
    // Управління світлом
    zones.forEach(zone => {
        const lightOnButton = document.getElementById(`${zone.id}-light-on`);
        const lightOffButton = document.getElementById(`${zone.id}-light-off`);

        if (lightOnButton && lightOffButton) {
            lightOnButton.addEventListener('click', () => {
                updateSensor(zone.id, 'light', 'on');
                updateUI(getZones(), { updateColor: true });
            });

            lightOffButton.addEventListener('click', () => {
                updateSensor(zone.id, 'light', 'off');
                updateUI(getZones(), { updateColor: true });
            });
        } else {
            console.log(`Light buttons for ${zone.id} not found`);
        }
    });

    // Управління вікнами (зони 1 і 2)
    const windowZones = zones.filter(zone => zone.sensors.window !== undefined);
    windowZones.forEach(zone => {
        const windowOnButton = document.getElementById(`${zone.id}-window-open`);
        const windowOffButton = document.getElementById(`${zone.id}-window-close`);

        if (windowOnButton && windowOffButton) {
            windowOnButton.addEventListener('click', () => {
                updateSensor(zone.id, 'window', 'open');
                updateUI(getZones(), { updateColor: true });
            });

            windowOffButton.addEventListener('click', () => {
                updateSensor(zone.id, 'window', 'closed');
                updateUI(getZones(), { updateColor: true });
            });
        } else {
            console.log(`Window buttons for ${zone.id} not found`);
        }
    });

    // Управління телевізором (лише зона 1)
    const tvZone = zones.find(zone => zone.id === 'zone-1');
    const tvOnButton = document.getElementById('zone-1-tv-on');
    const tvOffButton = document.getElementById('zone-1-tv-off');

    if (tvOnButton && tvOffButton) {
        console.log('TV buttons for zone-1 found and initialized');
        tvOnButton.addEventListener('click', () => {
            console.log('TV On button clicked for zone-1');
            updateSensor('zone-1', 'tv', 'on');
            updateUI(getZones(), { updateColor: true });
        });

        tvOffButton.addEventListener('click', () => {
            console.log('TV Off button clicked for zone-1');
            updateSensor('zone-1', 'tv', 'off');
            updateUI(getZones(), { updateColor: true });
        });
    } else {
        console.log('TV buttons for zone-1-tv-on or zone-1-tv-off not found');
    }
}