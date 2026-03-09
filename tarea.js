let nota1 = 4.0
let nota2 = 3.5
let nota3 = 4.2

let promedio = (nota1 + nota2 + nota3) / 3

console.log("Promedio:", promedio)

if (promedio >= 3) {
    console.log("El estudiante APRUEBA")
} else {
    console.log("El estudiante REPRUEBA")
}

// index.js - Sistema de Notas
const calcularPromedio = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
};

console.log("Sistema de Notas Inicializado");