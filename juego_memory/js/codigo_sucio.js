let filas = prompt("Numero de filas:");
let columnas = prompt("Numero de columnas:");
let array = []; 

let posNumFila;
let posNumColumna;

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

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        if (array[i][j] == null) {
            array[i][j] = 0;
        }
    }
    
}



