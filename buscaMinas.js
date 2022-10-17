let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let numMinas = prompt('¿Cuántas minas quieres introducir?');

let arrayTablero = [];

function colocarMinas(array, filas, columnas){
let contadorMinas = 0;

for (let fila = 0; fila < maxFilas; fila++) {
    arrayTablero[fila] = new Array(maxColumnas);

    for (let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = '';
    }
}


let posFila;
let posColumna;


while (contadorMinas < numMinas) {
    posFila = Math.floor(Math.random() * maxFilas);
    posColumna = Math.floor(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA') {
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    };
};

}

function numerosAlrededor(filas, columnas){

let numMinasAlrededor;

for (let fila = 0; fila < maxFilas; fila++) {
    for (let columna = 0; columna < maxColumnas; columna++) {
        numMinasAlrededor = 0;
        if (arrayTablero[fila][columna] != 'MINA') {
            for (let cFila = fila - 1; cFila < fila + 2; cFila++) {
                if (cFila >= 0 && cFila < maxFilas) {
                    for (let cColumna = columna - 1; cColumna < columna + 2; cColumna++) {
                        if (cColumna >= 0 && cColumna < maxColumnas &&
                            arrayTablero[cFila][cColumna] == 'MINA') {
                            numMinasAlrededor++;
                        }
                    }
                }
                arrayTablero[fila][columna] = numMinasAlrededor;
            }

        }
    }
}

    console.log(arrayTablero);
}

function crearTablero(tablero, numFilas, numcolumnas){

    document.write('<table>');

    for (let i = 0; i < maxFilas; i++) {
        document.write('<tr>');
    
        for (let j = 0; j < maxColumnas; j++) {
            document.write('<td>' + arrayTablero[i][j] + '</td>');
        }
    
        document.write('</tr>');
    }
    document.write('</table>');

}
colocarMinas(arrayTablero, maxFilas, maxColumnas);
numerosAlrededor(maxFilas, maxColumnas);
crearTablero(arrayTablero, maxFilas, maxColumnas);