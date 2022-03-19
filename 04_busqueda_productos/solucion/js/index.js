
// Crear array de productos que cada uno incluya 
// información sobre id, nombreProducto, marca, fechaExpiracion:

const listaProductos = [
    {
        id: 1,
        nompreProducto: 'mantequilla',
        marca: 'DairyGold',
        fechaExpiracion: '2022-04-20'
    },
    {
        id: 2,
        nompreProducto: 'leche',
        marca: 'Avonmore',
        fechaExpiracion: '2022-04-13'
    },
    {
        id: 3,
        nompreProducto: 'jamón',
        marca: 'Denny',
        fechaExpiracion: '2022-04-18'
    },
    {
        id: 4,
        nompreProducto: 'pan',
        marca: 'Brennans',
        fechaExpiracion: '2022-03-29'
    },
    {
        id: 5,
        nompreProducto: 'huevos',
        marca: 'GoldenIrish',
        fechaExpiracion: '2022-04-18'
    },
]

// Crear dos funciones para buscar productos acorde a los parámetros:

function buscarProductosPorId(id) {
    return listaProductos.filter((producto)=> producto.id === id);
}
console.log(buscarProductosPorId(2));

function buscarProductosPorFecha(fechaA, fechaB) {
    fechaA = new Date(fechaA);
    fechaB = new Date(fechaB);
    return listaProductos.filter((producto)=>{
        const fechaExpiracion = new Date(producto.fechaExpiracion);
        return fechaExpiracion <= fechaA && fechaExpiracion >= fechaB;
    });
}

console.log(buscarProductosPorFecha('2022-04-30', '2022-04-15'));
