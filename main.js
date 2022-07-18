function encriptar(){
    var texto = document.querySelector(".texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("muñecoMensaje").style.display = "none";
    document.getElementById("muñecoTexto").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display	= "inherit"
}

function desencriptar(){
    var texto = document.querySelector(".texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("muñecoMensaje").style.display = "none";
    document.getElementById("muñecoTexto").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display	= "inherit"
}

function copiar(){
    navigator.clipboard.writeText(muñecoTexto.innerHTML);

    alerta.textContent = "Copiado al portapapeles de forma exitosa!";

    setTimeout(function reset() {
        alerta.textContent = " ";
    }, 3000);

}
