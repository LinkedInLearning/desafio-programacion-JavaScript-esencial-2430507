
const arreglo = [];

setInterval(agregarElemento, 4000, () => Math.floor(Math.random() * 100));

function agregarElemento(numeroAleatorio) {
    
    const prioridad = numeroAleatorio();
    
    // Agregar el elemento prioridad al arreglo manteniendo 
    // el orden ascendente

    arreglo.push(prioridad);
    arreglo.sort((a, b)=> a - b);

    console.log(arreglo);
}

