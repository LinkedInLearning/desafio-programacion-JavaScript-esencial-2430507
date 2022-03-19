
// Escribir la implementación de la calculadora.

const input = document.getElementById('input-numero');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const division = document.getElementById('divisar');

const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

sumar.addEventListener('click', ejecutarOperacion);
restar.addEventListener('click', ejecutarOperacion);
multiplicar.addEventListener('click', ejecutarOperacion);
division.addEventListener('click', ejecutarOperacion);
calcular.addEventListener('click', ejecutarOperacion);

function mostrarValores(valor) {
    resultado.innerText = valor;
}

// Se puede utilizar código alternativo si así se desea:

function ejecutarOperacion(evento) {
    //Completar función:
}

function calcularResultado() {
    //Completar función:
    let total;
    switch (operador) {
        case '+':
            total = valor1 + valor2;
            break;
        case '*':
            total = valor1 * valor2;
            break;
        case '-':
            total = valor1 - valor2;
            break;
        case '/':
            total = valor1 / valor2;
            break;
    }
}

