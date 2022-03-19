
// Implementar scroll infinito en la página:

const contenedor = document.getElementById('contenedor');

document.addEventListener('scroll', ()=>{
    const alturaDocumento = document.documentElement.scrollHeight;
    const alturaVentana = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;

    if(scrollTop + alturaVentana === alturaDocumento){
        contenedor.appendChild(document.createElement('li'));
    }

    if(scrollTop === 0){
        contenedor.prepend(document.createElement('li'));
    }
});