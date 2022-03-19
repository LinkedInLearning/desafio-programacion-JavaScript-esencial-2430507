
// 1. Escribir una clase para guardar el nombre, la fecha de expiracion 
// y el precio de venta de los productos.

class Producto{
    _nombre;
    _precio;
    _fechaVencimiento;

    constructor(nombre, precio, fechaVencimiento){
        this._nombre = nombre;
        this._precio = precio;
        this._fechaVencimiento = new Date(fechaVencimiento);
    }
}


// 2. Escribir una función que tome una lista de productos y sume el total del costo
// de los productos, excuyendo los productos expirados.

function carritocompra(productos){
    const hoy = new Date();
    const productosValidos = productos.filter((producto)=> producto._fechaVencimiento > hoy);
    return productosValidos.reduce((acumulador, producto)=> acumulador += producto._precio, 0);
}

const resultado = carritocompra([
    new Producto('leche', 4, '2022-03-15'),
    new Producto('pan', 2, '2022-03-14'),
    new Producto('mantequilla', 3, '2022-03-18'),
    new Producto('queso', 4, '2022-03-19'),
]);

console.log(resultado);
