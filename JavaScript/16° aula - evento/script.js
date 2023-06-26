let nome = document.getElementById('abc')
function mudar (){
    nome.innerHTML = 'São os alunos de Santo Amaro s2'
}

let dataDeHoje = document.getElementById('demo')
function Data(){
    dataDeHoje.innerHTML = Date()
}

function carregarAviso()
{
    alert('você acessou a página')
}

let obj = document.getElementById("obj")
function MudarDeFrase(){
    obj.innerHTML = "Obrigado"
}

function VoltarAFrase()
{
    obj.innerHTML = "passe o mouse aqui!"
}