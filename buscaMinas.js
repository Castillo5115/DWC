let numFilas = prompt('¿Cuantas filas quieres?');
let numColumnas = prompt('¿Cuantas columnas quieres?');
let numMinas = prompt('¿Cuantas minas quieres q haiga?');

// Titulo de la página
document.write('<h1 id="titulo">Busca Minas</h1>');


//Creamos el tablero
document.write('<table>');

for (let i = 0; i < numFilas; i++) {
        document.write('<tr>');
        for (let z = 0; z < numColumnas; z++) {
            document.write('<td></td>');            
        }
        document.write('</tr>');
}

document.write('</table>');

// Crear array bidimensional para guardar las minas

let arrayTablero = [];
for(let i = 0; i < numMinas; i++){
    posFila = Math.floor(Math.random()*numFilas - 1);
    //arrayTablero[posFila][posColumna] = "Mina";
    console.log(arrayTablero);
}




/* <h1 id="titulo">Busca Minas</h1>
    <div class="objeto">
        <table class="tabla">
            <tr>
                <td>1</td>
                <td>2</td>
                <td>Mina</td>
                <td>Mina</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mina</td>
                <td>3</td>
                <td>4</td>
                <td>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>Minas</td>
                <td>2</td>
                <td>Mina</td>
            </tr>
            <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>1</td>
                <td>Mina</td>
                <td>1</td>
            </tr>
        </table>
    </div> */