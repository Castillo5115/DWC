let nodoBody = document.getElementsByTagName('body')[0];

// Crear H1 y H2

let h1 = document.createElement('h1');
nodoBody.appendChild(h1);
h1.innerHTML="Examen Recuperación DOM";

let h2 = document.createElement('h2');
nodoBody.appendChild(h2);
h2.innerHTML = "Ejercicio 1";

// Crear Labels de primer numero y segundo numero

let labelPrimerNumero = document.createElement("label");
labelPrimerNumero.innerHTML = "Primer Número: ";
nodoBody.appendChild(labelPrimerNumero);

let inputPrimerNumero = document.createElement('input');
nodoBody.appendChild(inputPrimerNumero);
inputPrimerNumero.type = "text";
inputPrimerNumero.name = "valor1";
console.log(inputPrimerNumero);

let br1 = document.createElement('br');
nodoBody.appendChild(br1);

let labelSegundoNumero = document.createElement("label");
labelSegundoNumero.innerHTML = "Segundo Número: ";
nodoBody.appendChild(labelSegundoNumero);

let inputSegundoNumero = document.createElement('input');
nodoBody.appendChild(inputSegundoNumero);
inputSegundoNumero.type = "text";
inputSegundoNumero.name = "valor2";
console.log(inputSegundoNumero);

let br2 = document.createElement('br');
nodoBody.appendChild(br2);

let br3 = document.createElement('br');
nodoBody.appendChild(br3);

// Creacion de los Botones

for (let i = 0; i < 4; i++) {
    let inputBoton  = document.createElement('input');
    inputBoton.type = "button";
    inputBoton.name= "button"+(i+1);
    nodoBody.appendChild(inputBoton);
}

let suma = document.getElementsByTagName('input')[2];
suma.value = "Sumar";
console.log(suma);

let resta = document.getElementsByTagName('input')[3];
resta.value = "Restar"
console.log(resta);

let multiplicacion = document.getElementsByTagName('input')[4];
multiplicacion.value = "Multiplicar";
console.log(multiplicacion);

let division = document.getElementsByTagName('input')[5];
division.value = "Dividir";
console.log(division);


let br4 = document.createElement('br');
nodoBody.appendChild(br4);

let br5 = document.createElement('br');
nodoBody.appendChild(br5);

// Crear label Resultado

let lableResultado = document.createElement('label');
lableResultado.innerHTML = "Resultado: ";
nodoBody.appendChild(lableResultado);

let inputResultado = document.createElement('input');
inputResultado.type="text";
inputResultado.name="resultado";
nodoBody.appendChild(inputResultado);
console.log(inputResultado);