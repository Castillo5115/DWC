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

    dibujarTableroHTML() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td></td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    dibujarTableroDOM(){
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                fila.appendChild(columna);
            }
        }

        document.body.appendChild(tabla);
    }

    
    

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas
        this.filas = nuevasFilas;

        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }


}

class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.colocarMinas();
        this.colocarNumMinas();
        console.log(this.arrayTablero);
        this.arrayTablero;
    }

    colocarMinas() {
        let contadorMinas = 0;
        let posFila;
        let posColumna;


        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
                }
            }
        }
    }

    dibujarTableroDOM(){
        super.dibujarTableroDOM();

        let celda;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++){
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar.bind(this));
                celda.addEventListener('contextmenu', this.marcar.bind(this));
            }
        }
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        let fila = celda.dataset.fila;
        let columna = celda.dataset.columna;

        let valorCelda = this.arrayTablero[fila][columna];
        let esNumero = (this.arrayTablero[celda.dataset.fila][columna] != 'MINA' && this.arrayTablero[fila][columna] != 0);
        let esBomba = (this.arrayTablero[fila][columna] == "MINA");

        if (esNumero) {
            celda.innerHTML = this.arrayTablero[fila][columna];
            celda.removeEventListener('click', this.despejar.bind(this));
            celda.removeEventListener('contextmenu', this.marcar.bind(this));
        }else if(esBomba){
            celda.innerHTML = valorCelda;
        }



    };

    marcar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        // Utilizando el elemento img
        let imagen = document.createElement('img');
        imagen.style.height = "20px";
        
        if (celda.lastChild == null) {
            imagen.src = "img/flag.png";
            celda.appendChild(imagen);
        } else if (celda.lastChild.src == "file:///home/horabaixa/Documentos/DWC/img/flag.png") {
            celda.lastChild.src = "img/interrogante.png";
        } else if (celda.lastChild.src == "file:///home/horabaixa/Documentos/DWC/img/interrogante.png") {
            celda.lastChild.src = "";
        } else if (celda.lastChild.src == "file:///home/horabaixa/Documentos/DWC") {
            celda.lastChild.src == "img/flag.png";
        }

        // Utilizando los formatos UNICODE de JS
        /*
        if (this.innerHTML == "") {
            this.innerHTML = "\uD83D\uDEA9";
        } else if (this.innerHTML == "\uD83D\uDEA9") {
            this.innerHTML = "\u2754";
        } else if(this.innerHTML == "\u2754") {
            this.innerHTML = "";
        };
        */

        // Utilizando clases en el .css
        /*
         switch (this.className) {
            case "":
                this.className = "bandera";
                break;
            case "bandera":
                this.className = "interrogante";
                break;
            default:
                this.className = "";
                break;
         }
        */
            
    }
}

window.onload = function() {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.dibujarTableroDOM();
}


// if (this.lastChild == null) {
//     imagen.src = "img/flag.png";
//     this.appendChild(imagen);
// } else if (this.lastChild.src == "http://127.0.0.1:5500/img/flag.png") {
//     this.lastChild.src = "img/interrogante.png";
// } else if (this.lastChild.src == "http://127.0.0.1:5500/img/interrogante.png") {
//     this.lastChild.src = "";
// } else if (this.lastChild.src == "http://127.0.0.1:5500/img/interrogante.png") {
//     this.lastChild.src == "img/flag.png";
// }