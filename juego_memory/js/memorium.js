class Tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearArray();

    }
    crearArray() {
        let compatible = this.filas * this.columnas;
        if (compatible % 2 == 0) {
            this.array = [];    
            for (let fila = 0; fila < this.filas; fila++) {
                if(this.filas >= 2 && this.columnas >= 2){
                    this.array[fila] = new Array(this.columnas);
                }else{
                    alert("El tablero mínimo puede ser 2x2");
                    alert("Presiona F5 para reiniciar juego");
                }
                for (let columna = 0; columna < this.columnas; columna++) {
                    this.array[fila][columna] = '';
                }
            } 
        }else{
            alert("El número de casillas debe ser par");
            alert("Presiona F5 para reiniciar juego");
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
    }
    iniciarMemorium(){
        let contador;
        let posFila;
        let posColumna;
        let casillasLlenas = 0;
        let array_numeros =[1,2,3,4,5,6,7,8,9,10];
        let i = 0;
        while(casillasLlenas < (this.filas * this.columnas)){
            contador = 0;
            while(contador < 2){
                posFila=Math.floor(Math.random()*this.filas);
                posColumna = Math.floor(Math.random()*this.columnas);
                if (this.array[posFila][posColumna] != '') {
                    while (this.array[posFila][posColumna] != '') {
                        posFila=Math.floor(Math.random()*this.filas);
                        posColumna = Math.floor(Math.random()*this.columnas);
                    }
                    this.array[posFila][posColumna] = array_numeros[i];
                    casillasLlenas++;
                    contador++;
                }else{
                    this.array[posFila][posColumna] = array_numeros[i];
                    casillasLlenas++;
                    contador++;
                }
            }   
            i++;
            if (i == 10) {
                i = 0;
            }
        }
        this.pintarTablero(); 
    }
}

let tablero1 = new Tablero(prompt("Numero de filas:"),prompt("Columnas:"));
tablero1.iniciarMemorium();