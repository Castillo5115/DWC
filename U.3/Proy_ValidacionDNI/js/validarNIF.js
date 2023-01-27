function validarNombre(){
    let patron = /^[A-Za-záéíóúüïàèìòùÁÉÍÓÚñÑçÇ]{2,}$/;

    let esValido = patron.test(`AA`);
    console.log(esValido);
}

function validarApellidos(){
    let patron = /^[A-Za-záéíóúüïàèìòùÁÉÍÓÚñÑçÇ]{2,}$/;

    let esValido = patron.test(`AA`);
    console.log(esValido);
}

function validarEmail(){
    let patron = /^.+@.+$/;
    let esValido = patron.test(`acastillolopez@iessonferrer.com`);
    console.log(esValido);
}


function validarNIF(){
    let patron = /^[0-9]{8}[A-Za-z]{1}$/;

    let esValido = patron.test(`43469574B`);
    console.log(esValido);
}

window.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');
    let nif = document.getElementById('nif');

    nombre.addEventListener('keyup', validarNombre);
    apellidos.addEventListener('keyup', validarApellidos);
    email.addEventListener('keyup', validarEmail);
    nif.addEventListener('keyup', validarNIF);
});