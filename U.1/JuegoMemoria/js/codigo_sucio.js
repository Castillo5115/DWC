//Pruebas de codigo para su funcionalidad

// Variable a usar
let filas = prompt("Numero de filas:");
let columnas = prompt("Numero de columnas:");
let array = []; 


//Inicializamos el array
for (let fila = 0; fila <= filas; fila++) {
    array[fila] = new Array(columnas);

    for (let columna = 0; columna <= columnas; columna++) {
        array[fila][columna] = '';
    }
}

// Prueba para sacar numeros pares
let resutado;

resutado = (filas * columnas)%2;

if (resutado == 0){
    document.write("Es par");
}else{
    alert("El numero de casillas debe ser par");
    alert("Reinicia con F5");
}
 // Crea parejas y las inserta de forma aleatoria
 // en el array inicializado anteriormente.
let contador;
let posFila;
let posColumna;
let casillasLlenas = 0; // Nos indica el número de casillas que tienen un valor dentro.
let array_numeros =[1,2,3,4,5,6,7,8,9,10];
let i = 0;
while(casillasLlenas < (filas * columnas)){
    contador = 0; // Nos indica el número de veces que se repite el número.
    while(contador < 2){
        posFila=Math.floor(Math.random()*filas); // Genera una posicion de fila aleatoria.
        posColumna = Math.floor(Math.random()*columnas);
        if (array[posFila][posColumna] != '') { // Condicion si la posicion generada hay un valor pasa al bucle.
            while (array[posFila][posColumna] != '') { // Busca una posición aleatoria vacia.
                posFila=Math.floor(Math.random()*filas);
                posColumna = Math.floor(Math.random()*columnas);
            }
            array[posFila][posColumna] = array_numeros[i];
            casillasLlenas++;
            contador++;
        }else{
            array[posFila][posColumna] = array_numeros[i];
            casillasLlenas++;
            contador++;
        }
    }
    i++;// Va avanzando sobre el array "array_numeros".
    if (i == array_numeros.length) { // En el momento que i llega a recorrer todo el array, vuelve a cero para terminar de llenar casillas.
        i = 0;
    }
}

// Pinta el tablero
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