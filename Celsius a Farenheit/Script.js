// Convirtiendo la temperatura

const input = prompt("Introduzca temperatura en grados celsius");

function celsiusToFahrenheit(celsius) { // se declara la función de celsius a fahrenheit
    let fahrenheit = (celsius * 9/5) + 32; // se realiza el cálculo y se almacena el resultado
    return fahrenheit; // devuelve el valor calculado
}

function celsiusToKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}

const celsius = parseFloat(input); // Convertir la entrada (cadena de texto) a número (decimal)

// Llamar a las funciones con el valor del usuario
const fahrenheit = celsiusToFahrenheit(celsius); // La constante almacena el resultado de la función celsiusToFahrenheit
const kelvin = celsiusToKelvin(celsius);

// Mostrar los resultados
console.log(`Temperatura en Fahrenheit: ${fahrenheit}°F`);
console.log(`Temperatura en Kelvin: ${kelvin} K`);
