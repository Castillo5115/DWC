document.addEventListener("DOMContentLoaded", function(event) {
    let nodoRaiz = document.documentElement;
    let arrayHijos = nodoRaiz.children;

    let nodoHead1 = nodoRaiz.firstChild;
    let nodoHead2 = nodoRaiz.children[0];

    let nodoBody1 = nodoRaiz.lastChild;
    let numHijosHTML = nodoRaiz.childNodes.length;
    let nodoBody2 = nodoRaiz.children[ nodoRaiz.children.length - 1];

    let nodoBody = document.body;

    let padreHead = nodoHead1.parentNode;

    let hermanoAnteriorBody = nodoBody1.previousSibling;

    let hermanoSiguienteBody = nodoBody1.nextSibling;
    let hermanoSiguienteHead = nodoHead1.nextSibling;
    let propietario = nodoHead1.ownerDocument;
});