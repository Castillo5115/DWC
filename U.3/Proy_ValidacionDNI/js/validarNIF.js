function validarNombre(){
    let patron = /^[A-Za-záéíóúüïàèìòùÁÉÍÓÚñÑçÇ]{2,}$/;

    let esValido = patron.test(`AA`);
    console.log(esValido);
    esValido = patron.test(`s`);
    esValido
}

document.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');
    nombre.addEventListener('keyup', validarNombre);
});