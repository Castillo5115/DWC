const registroPacientes = new Map([
    [`AAA024`, `Fernandez M. (321790059) -> C/Recoletos, 50`],
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN385`, `Benítez E. (154811767) -> Av. Argentina, 5`]
]);


for(let [clave,valor] of registroPacientes){
    console.log(clave);
    console.log(valor);
}
