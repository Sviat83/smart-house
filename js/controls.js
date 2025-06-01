import { updateSensor, getZones } from './zones.js';
import { updateUI } from './ui.js';

let logActions = [];

export function setupControls(zones) {
    // Управління світлом
    zones.forEach(zone => {
        const lightOnButton = document.getElementById(`${zone.id}-light-on`);
        const lightOffButton = document.getElementById(`${zone.id}-light-off`);

        if (lightOnButton && lightOffButton) {
            lightOnButton.addEventListener('click', () => {
                updateSensor(zone.id, 'light', 'on');
                logActions.push(`${new Date().toLocaleTimeString()} Увімкнено Світло у ${zone.name}`);
                updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
            });

            lightOffButton.addEventListener('click', () => {
                updateSensor(zone.id, 'light', 'off');
                logActions.push(`${new Date().toLocaleTimeString()} Вимкнено Світло у ${zone.name}`);
                updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
            });
        } else {
            console.log(`Light buttons for ${zone.id} not found`);
        }
    });

    // Управління вікнами
    const windowZones = zones.filter(zone => zone.sensors.window !== undefined);
    windowZones.forEach(zone => {
        const windowOnButton = document.getElementById(`${zone.id}-window-open`);
        const windowOffButton = document.getElementById(`${zone.id}-window-close`);

        if (windowOnButton && windowOffButton) {
            windowOnButton.addEventListener('click', () => {
                updateSensor(zone.id, 'window', 'open');
                logActions.push(`${new Date().toLocaleTimeString()} Відкрито Вікно у ${zone.name}`);
                updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
            });

            windowOffButton.addEventListener('click', () => {
                updateSensor(zone.id, 'window', 'closed');
                logActions.push(`${new Date().toLocaleTimeString()} Закрито Вікно у ${zone.name}`);
                updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
            });
        } else {
            console.log(`Window buttons for ${zone.id} not found`);
        }
    });

    // Управління телевізором
    const tvZone = zones.find(zone => zone.id === "zone-1");
    const tvOnButton = document.getElementById("zone-1-tv-on");
    const tvOffButton = document.getElementById("zone-1-tv-off");

    if (tvOnButton && tvOffButton) {
        console.log("TV buttons for zone-1 found and initialized");
        tvOnButton.addEventListener("click", () => {
            console.log("TV On button clicked for zone-1");
            updateSensor("zone-1", "tv", "on");
            logActions.push(`${new Date().toLocaleTimeString()} Увімкнено Телевізор у ${tvZone.name}`);
            updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
        });

        tvOffButton.addEventListener("click", () => {
            console.log("TV Off button clicked for zone-1");
            updateSensor("zone-1", "tv", "off");
            logActions.push(`${new Date().toLocaleTimeString()} Вимкнено Телевізор у ${tvZone.name}`);
            updateUI(getZones(), { updateColor: true, logActions: [...logActions] });
        });
    } else {
        console.log("TV buttons for zone-1-tv-on or zone-1-tv-off not found");
    }
}