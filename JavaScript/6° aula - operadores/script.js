let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function Apertar()
{ 
    if(idade.value>= 16 && titulo.value == "sim")
    {
        alert("Você poderá votar")
    }

    else
    {
        alert("Não poderá votar") 
    }
}

let minutos;
let preço;

if(miutos <= 200)
{
    preço = 0.2
}

else
{
    if(minutos <= 400)
    {
        preço = 0.18
    }
    else
    {
        preço = 0.15
    }
}