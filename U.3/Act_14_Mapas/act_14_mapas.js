const registroPacientes = new Map([
    [`AAA024`, `Fernandez M. (321790059) -> C/Recoletos, 50`],
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN385`, `Benítez E. (154811767) -> Av. Argentina, 5`]
]);

registroPacientes.forEach(function(valor, clave){
    // SEPARANDO LOS VALORES DEL MAPA
        let numeroRegistro = clave;
        let direccion = valor.split(') -> ')[1];
        let numeroSS = valor.split(') -> ')[0].split(' (')[1];
        let nombreCompleto = valor.split(' (')[0];
        for (let i = 0; i < registroPacientes.length; i++) {
            console.log("Hola");
        }
    }
);