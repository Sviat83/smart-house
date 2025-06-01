let zonesData = [
    {
        id: "zone-1",
        name: "Кімната",
        sensors: {
            light: "off",
            temperature: 0,
            window: "closed"
        }
    },
    {
        id: "zone-2",
        name: "Кухня",
        sensors: {
            light: "off",
            temperature: 0,
            window: "closed",
            tv: "off"
        }
    },
    {
        id: "zone-3",
        name: "Коридор",
        sensors: {
            light: "off",
            temperature: 0
        }
    },
    {
        id: "zone-4",
        name: "Ванна",
        sensors: {
            light: "off",
            temperature: 0
        }
    }
];

// Функція для генерації випадкової температури
function generateTemperature() {
    const minTemp = 20;
    const maxTemp = 25;
    const baseTemp = Math.random() * (maxTemp - minTemp) + minTemp; // 20–25°C
    const deviation = (Math.random() * 4) - 2; // Похибка ±2°C
    return Math.round((baseTemp + deviation) * 10) / 10; // Округлення до 1 знака
}

// Ініціалізація зон і генерація початкової температури
export function initializeZones() {
    zonesData.forEach(zone => {
        zone.sensors.temperature = generateTemperature();
    });
    return zonesData;
}

// Функція для оновлення стану датчика
export function updateSensor(zoneId, sensor, value) {
    const zone = zonesData.find(z => z.id === zoneId);
    if (zone && zone.sensors[sensor] !== undefined) {
        zone.sensors[sensor] = value;
    }
}

// Функція для отримання поточного стану зон
export function getZones() {
    return zonesData;
}