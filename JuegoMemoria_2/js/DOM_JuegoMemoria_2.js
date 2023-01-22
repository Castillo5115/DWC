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

class Memorium extends Tablero{
    constructor(filas, columnas){
        super(filas, columnas);
        this.tabla;
        this.contador = 0;
        this.click1;
        this.click2;
        this.celda1;
        this.celda2;
        this.contadorCeldas = 0;
        this.contadorParejas = 0;
        this.sonTrue = 0;
        this.parejas = this.filas * this.columnas / 2;
        this.pintarTablero();
    }

    pintarTablero(){ //Pinta el tablero que utilizaremos para poder jugar.
        this.tabla = document.createElement('table');
        

        for (let i = 0; i < this.filas; i++) {
            this.fila = document.createElement('tr');
            this.tabla.appendChild(this.fila);

            for (let j = 0; j < this.columnas; j++) {
                this.columna = document.createElement('td');
                this.columna.id = `f${i}_c${j}`;
                this.columna.dataset.fila = i;
                this.columna.dataset.columna = j;
                this.columna.dataset.despejado = false;
                this.fila.appendChild(this.columna);
            }
        }
        document.body.appendChild(this.tabla);

        let celda;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);
                celda.addEventListener('click', this.despejar.bind(this));
            }
        }

    }

    colocarParejas(){ //Crea las parejas de números y las posiciona en el tablero.
        
        let lista_tr = this.tabla.childNodes;
        let lista_td;
        let tr;
        let td;
        
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
        console.log(this.array);
    }

    despejar(elEvento){
        let evento = elEvento || window.event; // Iniciar el evento.
        let celda = evento.currentTarget;
        this.despejarCelda(celda);
    }

    despejarCelda(celda){
        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);
        let valorCelda = this.array[fila][columna];

        this.celda1_id;
        this.cerlda2_id;

        this.contador++;

        if (this.contador == 1){
            this.click1 = valorCelda;
            this.celda1_id = celda.id;
            this.click1_id = celda.id;
            celda.innerHTML = valorCelda;
        }else if (this.contador == 2){
            this.click2 = valorCelda;
            this.click2_id = celda.id;
            this.click2_id = celda.id;
            celda.innerHTML = valorCelda;
        }

        if (this.click1 != null && this.click2 != null) {
            if(this.click1 == this.click2){
                this.click1 = null;
                this.click2 = null;
                for (let i = 0; i < this.filas; i++) { // Bucle que mantiene destapadas las celdas cuando són correctas
                    for (let j = 0; j < this.columnas; j++) {
                        let celdas = document.getElementById(`f${i}_c${j}`);
                        if (celdas.id == this.click1_id) {
                            this.celda1 = (document.getElementById(this.click1_id));
                            this.celda1.despejado = true;
                            this.celda1 = removeEventListener('click', this.despejar.bind(this)); // Elimina el controlador de eventos para hacer el click en las celdas.
                        }
                        if (celdas.id == this.click2_id){
                            this.celda2 = (document.getElementById(this.click2_id));
                            this.celda2.despejado = true;
                            this.celda2= removeEventListener('click', this.despejar.bind(this)); // Elimina el controlador de eventos para hacer el click en las celdas.
                        }
                    }
                }

                this.contadorParejas++;

                this.contador = 0;
            }else{
                this.click1 = null;
                this.click2 = null;
                for (let i = 0; i < this.filas; i++) { // Bucle que tapa las celdas cuando no coinciden los números.
                    for (let j = 0; j < this.columnas; j++) {
                        let celdas = document.getElementById(`f${i}_c${j}`);
                        if (celdas.id == this.click1_id) {
                            setTimeout(() => {
                                this.celda1 = (document.getElementById(this.click1_id));
                                this.celda1.textContent = null;
                                this.celda1.despejado = false;
                            }, 200);
                        }
                        if (celdas.id == this.click2_id){
                            setTimeout(() => {
                                this.celda2 = (document.getElementById(this.click2_id));
                                this.celda2.textContent = null;
                                this.celda2.despejado = false;
                            }, 200);
                            
                        }
                    }
                }
                this.contador = 0;                  
            }
        }

        console.log(this.contadorParejas);

        let numParejas = this.filas * this.columnas / 2;

        if (this.contadorParejas == numParejas) { // En este condicional se mostrará la alerta al haber termminado el tablero entero.
            setTimeout(() => {
                alert('ENHORABUENA <3');
            }, 150);
        }

    }
}
window.onload = function(){
    let memorium1 = new Memorium(prompt("Numero de filas:"),prompt("Columnas:"));
    memorium1.colocarParejas();
}