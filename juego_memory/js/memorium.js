class Tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearArray();

    }
    crearArray() {
        this.array = [];
    
        for (let fila = 0; fila < this.filas; fila++) {
            if (this.filas >= 2 && this.columnas >= 3) {
                this.array[fila] = new Array(this.columnas);
            }else{
                alert("Las filas mínimas son 2 y las columnas mínismas son 3");
                alert("Presiona F5 para reiniciar juego");
            }
            for (let columna = 0; columna < this.columnas; columna++) {
                this.array[fila][columna] = '';
            }
        }
    }
    iniciarMemorium(){
        let contador;
        let posFila;
        let posColumna;
        let array_numeros =[1,2,3,4,5,6,7,8,9,10];
        for (let i = 0; i <= this.filas; i++) {
            contador = 0;
            while(contador < 2){
                posFila=Math.floor(Math.random()*this.filas);
                posColumna = Math.floor(Math.random()*this.columnas);
                if (this.array[posFila][posColumna] != '') {
                    while (this.array[posFila][posColumna] != '') {
                        posFila=Math.floor(Math.random()*filas);
                        posColumna = Math.floor(Math.random()*this.columnas);
                    }
                    this.array[posFila][posColumna] = array_numeros[i];
                    contador++;
                }else{
                    this.array[posFila][posColumna] = array_numeros[i];
                    contador++;
                }
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