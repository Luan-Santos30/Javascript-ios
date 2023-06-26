var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n4 = document.getElementById("n3");
var n3 = document.getElementById("n4");

var resultado = document.getElementById("Resultado");
var soma;

function SOMA()
{ 
    soma = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value))/4;
    resultado.innerHTML = SOMA;
}