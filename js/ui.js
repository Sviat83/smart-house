export function updateUI(zones, options = {}) {
    console.log('Updating UI with zones:', zones);
    zones.forEach(zone => {
        // Оновлення стану світла
        const lightSpan = document.getElementById(`${zone.id}-light`);
        if (lightSpan) {
            lightSpan.textContent = zone.sensors.light === 'on' ? 'On' : 'Off';
            if (options.updateColor) {
                lightSpan.classList.remove('yellow-state', 'red-state');
                lightSpan.classList.add(zone.sensors.light === 'on' ? 'yellow-state' : 'red-state');
            }
        }

        // Оновлення стану вікна
        const windowSpan = document.getElementById(`${zone.id}-window`);
        if (windowSpan) {
            windowSpan.textContent = zone.sensors.window === 'open' ? 'Open' : 'Closed';
            if (options.updateColor) {
                windowSpan.classList.remove('yellow-state', 'red-state');
                windowSpan.classList.add(zone.sensors.window === 'open' ? 'yellow-state' : 'red-state');
            }
        }

        // Оновлення стану телевізора
        const tvSpan = document.getElementById(`${zone.id}-tv`);
        if (tvSpan) {
            console.log(`Updating TV for ${zone.id}: ${zone.sensors.tv}`);
            tvSpan.textContent = zone.sensors.tv === 'on' ? 'On' : 'Off';
            if (options.updateColor) {
                tvSpan.classList.remove('yellow-state', 'red-state');
                tvSpan.classList.add(zone.sensors.tv === 'on' ? 'yellow-state' : 'red-state');
            }
        }

        // Оновлення температури (без зміни кольору)
        const tempSpan = document.getElementById(`${zone.id}-temperature`);
        if (tempSpan) {
            tempSpan.textContent = `${zone.sensors.temperature}°C`;
        }
    });
}