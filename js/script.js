

function imprimirResultadoAreaCirculo() {
    let radioCirculoEnTexto = document.getElementById("radioSolicitadoCirculo");
    let radioCirculo = parseFloat(radioCirculoEnTexto.value);
    let resultado = parseInt(Math.PI * Math.pow(radioCirculo,2));
    imprimirEnElHTML(resultado, "formularioCirculo");    
}

function imprimirResultadoAreaTriangulo() {
    let alturaTrianguloEnTexto = document.getElementById("alturaSolicitadoTriangulo");
    let baseTrianguloEnTexto = document.getElementById("baseSolicitadoTriangulo");
    let baseTriangulo = parseFloat(baseTrianguloEnTexto.value);
    let alturaTriangulo = parseFloat(alturaTrianguloEnTexto.value);
    let resultado = parseInt((baseTriangulo * alturaTriangulo)/2);
    imprimirEnElHTML(resultado, "formularioTriangulo");   
}


function imprimirEnElHTML (resultado, elementoAnterior) {
    let newP = document.createElement("p");
    let newContent = document.createTextNode("el resultado es: " + resultado);
    newP.appendChild(newContent);
    let currentDiv = document.getElementById(elementoAnterior);
    currentDiv.appendChild(newP); 
}