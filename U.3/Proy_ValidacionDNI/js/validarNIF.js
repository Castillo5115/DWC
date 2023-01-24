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

    this.className = "";
    if (patron.test(this,value)) {
        this.className = "verde";
    }
}

window.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');

    nombre.addEventListener('keyup', validarNombre);
    apellidos.addEventListener('keyup', validarApellidos);
    email.addEventListener('keyup', validarEmail);
});