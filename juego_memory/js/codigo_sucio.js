let filas = prompt("Numero de filas:");
let columnas = prompt("Numero de columnas:");
let array = []; 

let posFila;
let posColumna;

for (let fila = 0; fila < filas; fila++) {
    array[fila] = new Array(columnas);

    for (let columna = 0; columna < columnas; columna++) {
        array[fila][columna] = '';
    }
}

document.write('<table>');

for (let i = 0; i < filas; i++) {
    document.write('<tr>');

    for (let j = 0; j < columnas; j++) {
        document.write(`<td>${array[i][j]}</td>`);
    }

    document.write('</tr>');
}
document.write('</table>');
console.log(array);

let contador = 0;

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        numero = Math.floor(Math.random()* 10);
        if (numero == array[i][j]) {
            contador++;
        }
        if (contador < 2) {
            array[i][j] = numero;
        }
    }
}