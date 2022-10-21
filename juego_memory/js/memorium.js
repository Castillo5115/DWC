class Tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearArray();

    }
    crearArray() {
        this.array = [];
    
        for (let fila = 0; fila < this.filas; fila++) {
            this.array[fila] = new Array(this.columnas);

            for (let columna = 0; columna < this.columnas; columna++) {
                this.array[fila][columna] = '';
            }
        }
    }
    pintarTablero(){
        document.write("<h1>" + "Memorium" + "</h1>");
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.array[i][j]}</td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }
}

let tablero1 = new Tablero(prompt("Numero de filas:"),prompt("Columnas:"));
tablero1.pintarTablero();