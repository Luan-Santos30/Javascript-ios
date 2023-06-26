let Nota = document.getElementById("Nota");
let simounao = document.getElementById("simounao");
let resultado = document.getElementById("resultado");

function Apertar()
{ 
    if(Nota.value>= 7 && simounao.value == "sim")
    {
        alert("Você foi aprovado")
    }

    else
    {
        alert("Você não foi aprovado") 
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