let numero = document.getElementById("numero");
let resposta = document.getElementById("resposta");

function aperte()
{
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = ("Você escolheu, maçã");
            break;

            default:
                resposta.innerHTML = "não tem essa parada aqui não"
                break;
    }
}