class Tablero{
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearArray();

    }
    crearArray() { // Esta función crea el array con las condiciones de uso para el usuario, y en caso de que no se cumplan las condiciones saltará una alerta.
        let compatible = this.filas * this.columnas;
        if (compatible % 2 == 0) { // Condicion para sacar número de celdas pares.
            this.array = [];    
            for (let fila = 0; fila < this.filas; fila++) {
                    this.array[fila] = new Array(this.columnas);
                for (let columna = 0; columna < this.columnas; columna++) {
                    this.array[fila][columna] = '';
                }
            } 
        }else{ // Alertas que saltan cuando hay fallo del usuario.
            alert("El número de casillas debe ser par");
            alert("Presiona F5 para reiniciar juego");
        }
        
    }
    pintarTablero(){ // Esta funcion pinta el tablero de juego con las filas y las columnas que le introduzca el usuario.
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
    iniciarMemorium(){ // Esta funcion genera parejas de números. Cada pareja se inserta en el array en posiciones aleatorias.
        let contador;
        let posFila;
        let posColumna;
        let casillasLlenas = 0;
        let array_numeros =[1,2,3,4,5,6,7,8,9,10];
        let i = 0;
        while(casillasLlenas < (this.filas * this.columnas)){
            contador = 0;
            while(contador < 2){ // Bucle que cuenta el número de veces que se repite un número.
                posFila=Math.floor(Math.random()*this.filas);//Genera posición de fila aleatoria.
                posColumna = Math.floor(Math.random()*this.columnas);//Genera posición de columna aleatoria. 
                if (this.array[posFila][posColumna] != '') {// Condición en caso de encontrar una posición que tenga un valor.
                    while (this.array[posFila][posColumna] != '') {// Bucle que busca una posición vacia.
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
            if (i == 10) { // En el caso del que se llenen el tablero con todos los números del array, la cuenta volverá a cero para seguir llenando casillas.
                i = 0;
            }
        }
        this.pintarTablero(); // Llama a pintar tablero para pintar el tablero con todas las parejas hechas.
    }
}

let tablero1 = new Tablero(prompt("Numero de filas:"),prompt("Columnas:"));
tablero1.iniciarMemorium();