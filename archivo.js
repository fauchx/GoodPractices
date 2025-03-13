// utils.js - Archivo de utilidades con funciones reutilizables

// Función para formatear una fecha en formato DD/MM/YYYY
export function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

// Función para obtener un número aleatorio entre un rango
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
