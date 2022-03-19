
// Buscar elemento dentro del DOM utilizando recursión.

const elemento = 'Elemento9';
let encontrado = false;

function buscarElemento(root){
    if(root.innerHTML === elemento || root.innerText === elemento){
        encontrado = true;
        return;
    }

    if(root.children && root.children.leght === 0){
        return;
    }

    for(const hijo of root.children){
        buscarElemento(hijo);
    }
}

buscarElemento(document.body);
console.log(encontrado);
