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
                columna.dataset.despejado = false;
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
        
        this.despejarCelda(celda);
    };

    despejarCelda(celda){
        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);
        celda.dataset.despejado = true;

        let valorCelda = this.arrayTablero[fila][columna];
        let esNumero = (valorCelda != 'MINA' && valorCelda != 0);
        let esBomba = (valorCelda == 'MINA');
        let esVacio = (valorCelda == 0);

        let bombaSeleccionadaMal;

        let rutaBandera = "file:///C:/Users/belen/Documents/DWEC/ProjBuscaminas/imagenes/bandera.png";
        
        let arrayFilas;
        let arrayColumnas;
        let celdaNueva;

        let celdaComprobar = false;

        if (esNumero) {
            celda.innerHTML = valorCelda;
            celda.removeEventListener('click', this.despejar.bind(this));
            celda.removeEventListener('contextmenu', this.marcar.bind(this));
           
        } else if (esBomba) {
            
            arrayFilas = celda.parentNode.parentNode.childNodes;
            for (let tr of arrayFilas) {
                arrayColumnas = tr.childNodes;
                for (let td of arrayColumnas){
                    td.removeEventListener('click', this.despejar.bind(this));
                    td.removeEventListener('contextmenu', this.marcar.bind(this));

                    fila = td.dataset.fila;
                    columna = td.dataset.columna;
                    valorCelda = this.arrayTablero[fila][columna];
                    if (td.lastChild != null){
                        bombaSeleccionadaMal = (td.lastChild.src ==  rutaBandera && valorCelda != 'MINA');
                    
                        if (bombaSeleccionadaMal){
                            td.lastChild.src = "";
                            td.style.backgroundColor = 'red';
                            td.innerHTML = valorCelda;
                        } else if (valorCelda == 'MINA') {
                            td.innerHTML = valorCelda;
                        }
                    } else if (valorCelda == 'MINA') {
                            td.innerHTML = valorCelda;
                    }
                }
            }
            alert(`¡HAS PERDIDO!`);
        }else if(esVacio){
            
            for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                if (cFila >= 0 && cFila < this.filas) {
                    for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                        if (cColumna >= 0 && cColumna < this.columnas && !estaDespejado) {
                            celdaNueva = document.getElementById(`f${cFila}_c${cColumna}`);
                            console.log(`f${cFila}_c${cColumna}`);
                        }
                    }
                }
                
            }


        }
    }

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