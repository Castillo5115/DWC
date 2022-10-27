let filas = prompt("Numero de filas:");
let columnas = prompt("Numero de columnas:");
let array = []; 



for (let fila = 0; fila <= filas; fila++) {
    array[fila] = new Array(columnas);

    for (let columna = 0; columna <= columnas; columna++) {
        array[fila][columna] = '';
    }
}

let contador;
let posFila;
let posColumna;
let array_numeros =[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i <= filas; i++) {
    contador = 0;
    while(contador < 2){
        posFila=Math.floor(Math.random()*filas);
        posColumna = Math.floor(Math.random()*columnas);
        if (array[posFila][posColumna] != '') {
            while (array[posFila][posColumna] != '') {
                posFila=Math.floor(Math.random()*filas);
                posColumna = Math.floor(Math.random()*columnas);
            }
            array[posFila][posColumna] = array_numeros[i];
            contador++;
        }else{
            array[posFila][posColumna] = array_numeros[i];
            contador++;
        }
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