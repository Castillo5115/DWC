
window.onload = function(){
    let conversor = new ConversorTemperaturas();
}



class ConversorTemperaturas{
    constructor() {
        this.temp = "";
        this.aFarenheit = this.aFarenheit.bind(this);
        this.aCelsius = this.aCelsius.bind(this);

        let botonAFarenheit = document.getElementsByName("aFarenheit")[0];
        botonAFarenheit.addEventListener('click', this.aFarenheit);
        
        let botonACelsius = document.getElementsByName("aCelsius")[0];
        botonACelsius.addEventListener('click', this.aCelsius);
    }

    aFarenheit() {
        // Apartado 2
        let inputTemp = document.getElementsByName('tempEntrada')[0];
        console.log(inputTemp.value);
        let temp = parseInt(inputTemp.value);
        let conversion = `${(1.8) * temp + 32} ºF`;
        this.escribirDatos('Zona1',conversion);
        this.escribirFrase(conversion);
    }

    aCelsius() {
        // Apartado 3
        let inputTemp = document.getElementsByTagName('input')[0];
        console.log(inputTemp.value);
        let temp = parseInt(inputTemp.value);
        let conversion = `${((temp - 32)/1.8)} ºC`;
        this.escribirDatos('Zona1',conversion);
        this.escribirFrase(conversion);
    }

    escribirDatos(idElemento, conversion) {
        // Apartado 4
        if (idElemento == "Zona1") {
            let p = document.createElement('p');
            let divZona1 = document.getElementById('Zona1');
            divZona1.appendChild(p);
            p.innerHTML=conversion;
        }else if (idElemento == "Zona2") {
            let p = document.createElement('p');
            let divZona1 = document.getElementById('Zona2');
            divZona1.appendChild(p);
            p.innerHTML=conversion;
        }else if(idElemento == "Zona3"){
            let p = document.createElement('p');
            let divZona1 = document.getElementById('Zona3');
            divZona1.appendChild(p);
            p.innerHTML=conversion;
        }
        
    }

    escribirFrase(temperatura) {
        let cadena = "";
        if ((temperatura >= 14) && (temperatura < 32)) {
            cadena = 'Temperatura Baja';

        }
        if ((temperatura >= 32) && (temperatura < 68)) {
            cadena = 'Temperatura Moderada';
            
        }
        if ((temperatura >= 68) && (temperatura < 96)) {
            cadena = 'Temperatura Alta';
            
        }
        if (cadena == '-') {
            cadena = "Temperatura desconocida";
        }

        this.escribirDatos('Zona2', cadena);
    }
    
}