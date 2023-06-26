var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

var resultado = document.getElementById("Resultado");
var soma;

function SOMA()
{ 
    soma = parseFloat(n1.value) *100 parseFloat(n2.value);
    resultado.innerHTML = SOMA;
}