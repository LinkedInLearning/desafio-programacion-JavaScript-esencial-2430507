
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

const operacion = { valor1: null, valor2: null, operador: null };
let tempOperador = null;

function mostrarValores(valor) {
    resultado.innerText = valor;
}

// Se puede utilizar código alternativo si así se desea:

function ejecutarOperacion(evento) {
    //Completar función:

    const valor = input.value === '' ? 0 : parseInt(input.value);
    input.value = 0;

    if(!operacion.valor1){
        operacion.valor1 = valor;
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    if(!operacion.operador){
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    operacion.valor2 = valor;

    if(evento.target.innerText !== '='){
        tempOperador = evento.target.innerText;
    }

    calcularResultado();

}

function calcularResultado() {
    //Completar función:
    let total;
    switch (operacion.operador) {
        case '+':
            total = operacion.valor1 + operacion.valor2;
            break;
        case '*':
            total = operacion.valor1 * operacion.valor2;
            break;
        case '-':
            total = operacion.valor1 - operacion.valor2;
            break;
        case '/':
            total = operacion.valor1 / operacion.valor2;
            break;
    }

    mostrarValores(`${total} ${tempOperador ?? ''}`);

    operacion.valor1 = total;
    operacion.valor2 = null;
    operacion.operador = tempOperador ?? null;
    tempOperador = null;
}

