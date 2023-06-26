//addEventListener()
//elemento.addEvestListener(event, function)

let botao = document.getElementById("myBtn");

botao.addEventListener('click', mudarAlerta);
function MudarAlerta()
{
    alert("Olá Mundo!")
}