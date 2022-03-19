
function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarMatriz(tamano) {
    const matrix = [];
    for (let a = 0; a < tamano; a++) {
        const hijo = [];
        for (let b = 0; b < tamano; b++) {
            hijo.push(generarNumeroAleatorio(2));
        }
        matrix.push(hijo);
    }
    return matrix;
}

// Determinar si el usuario ha ganado el juego cuando 
// la matriz tiene una fila o columna donde todos los elementos son iguales.

const TAMANO_TABLERO = 4;
const matriz = generarMatriz(TAMANO_TABLERO);
console.log(matriz);

function arregloValido(valores){
    return valores.every((valor)=> valor === valores[0]);
}

let resultado = '';

for(let fila = 0; fila < TAMANO_TABLERO; fila++){
    if(arregloValido(matriz[fila])){
        resultado = `Fila ${fila}`;
        break;
    }
}

if(resultado === ''){
    for(let columna = 0; columna < TAMANO_TABLERO; columna++){
        const columnaEl = matriz.map((fila)=> fila[columna]);
        if(arregloValido(columnaEl)){
            resultado = `Columna ${columna}`;
            break;
        }
    }
}

console.log(resultado);
