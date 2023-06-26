let produto = document.getElementById("produto")

function Funcao()
{ 
//Criar elemento li
let li = document.createElement("li");
//Criar um texto
let texto = document.createTextNode(produto.value);
//Adicionar um texto no elemento
li.appendChild(texto)
//Adicionar o li na "minhalista"
document.getElementById("minhalista").appendChild(li)
}