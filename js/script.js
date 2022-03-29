

function imprimirResultadoAreaCirculo() {
    let radioCirculoEnTexto = document.getElementById("radioSolicitadoCirculo");
    let radioCirculo = parseFloat(radioCirculoEnTexto.value);
    if (radioCirculo > 0 && radioCirculo <= 100) {
        imprimirEnElHTML(parseInt(Math.PI * Math.pow(radioCirculo,2)), "formularioCirculo"); 
    } else {
        imprimirError(radioCirculo,"radio");
    }
}


function imprimirResultadoAreaTriangulo() {
    let alturaTrianguloEnTexto = document.getElementById("alturaSolicitadoTriangulo");
    let baseTrianguloEnTexto = document.getElementById("baseSolicitadoTriangulo");
    let baseTriangulo = parseFloat(baseTrianguloEnTexto.value);
    let alturaTriangulo = parseFloat(alturaTrianguloEnTexto.value);
    if (alturaTriangulo > 0 && baseTriangulo > 0 && alturaTriangulo <= 100 && baseTriangulo <= 100) {
        let resultado = parseInt((baseTriangulo * alturaTriangulo)/2);
        imprimirEnElHTML(resultado, "formularioTriangulo");  
    } else {
        if (baseTriangulo > 0 && baseTriangulo <= 100) {
            imprimirError(alturaTriangulo,"altura");
        } else {
            imprimirError(baseTriangulo,"base");
        } 
    }     
}


function imprimirEnElHTML (resultado, elementoAnterior) {
    let newP = document.createElement("p");
    let newContent = document.createTextNode("el resultado es: " + resultado);
    newP.appendChild(newContent);
    let currentDiv = document.getElementById(elementoAnterior);
    currentDiv.appendChild(newP); 
}

function imprimirError (numero,numeroAOperarEnString) {
    let error = "No se puede operar el numero:";
    if (numero < 0) {
        error += `\n -El numero de ${numeroAOperarEnString} es negativo`;
    } else {
        error += "\n -Solamente se pueden operar numeros desde 1 a 100";
    }
    alert(error);
}