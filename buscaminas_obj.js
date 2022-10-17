class Tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
    }

    crearTablero(){
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            arrayTablero[fila] = new Array(this.columnas);
    
            for (let columna = 0; columna < this.columnas; columna++) {
                arrayTablero[fila][columna] = '';
            }
        }

    }

    pintarTablero(){
        document.write('<table>');
    
        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
        
            for (let j = 0; j < this.columnas; j++) {
                document.write('<td>' + this.arrayTablero[i][j] + '</td>');
            }
        
            document.write('</tr>');
        }
        document.write('</table>');
    }

}

const buscaminas = new Tablero(3,4);
buscaminas.crearTablero();