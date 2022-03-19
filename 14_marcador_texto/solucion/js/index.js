
// Implementar el buscador de texto:
// Al hacer click en el botón, se deberá buscar el texto que el usuario a
// agregado al campo de texto y marcarlo en negrita en el párrafo.

const texto = document.getElementById('texto');
const input = document.getElementById('input');
const buscar = document.getElementById('buscar');

buscar.addEventListener('click', ()=>{
    let parrafos = texto.innerHTML;
    const valor = input.value;
    if(valor !== ''){
        let regex = new RegExp(valor, 'g');
        parrafos = parrafos.replace(regex, `<b>${valor}</b>`);
    }
    texto.innerHTML = parrafos;
});