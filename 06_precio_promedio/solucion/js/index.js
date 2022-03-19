
// Calcular el precio de las casas por localidad.
// la constante casas contiene la información de casas.

const acumulado = {};

for(const casa of casas){
    if(!acumulado[casa.localidad]){
        acumulado[casa.localidad] = { accumuladoPrecio: 0, contador: 0};
    }
    acumulado[casa.localidad].accumuladoPrecio += casa.precio;
    acumulado[casa.localidad].contador += 1;
}

console.log(acumulado);

const localidades = Object.keys(acumulado);

for(const localidad of localidades){
    console.log(localidad + ' ' + Math.floor(acumulado[localidad].accumuladoPrecio / acumulado[localidad].contador));
}