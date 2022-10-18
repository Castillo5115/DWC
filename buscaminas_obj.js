class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero() {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    dibujarTablero() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    modificarFilas(nuevasFilas){
        this.filas = nuevasFilas;
        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas){
        this.columnas = nuevasColumnas;
        this.crearTablero();
    }

}

const buscaminas = new Tablero(4, 3);
buscaminas.dibujarTablero();