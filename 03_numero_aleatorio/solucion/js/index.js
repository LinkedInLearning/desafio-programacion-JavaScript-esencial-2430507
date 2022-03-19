
// Generar un número aleatorio dentro de un rando de dos números:

function numeroAleatorio(numeroA, numeroB){
    return Math.floor(Math.random() * (numeroA - numeroB) + numeroB);
}

console.log(numeroAleatorio(5, 10));
console.log(numeroAleatorio(-25, -22));
console.log(numeroAleatorio(100, 0));
console.log(numeroAleatorio(-2, 2));