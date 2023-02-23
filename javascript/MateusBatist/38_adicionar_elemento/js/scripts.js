
//criando elemento
var el = document.createElement("div");
// define o nome da classe
el.classList ="div-criada";
//console.log(el);

//seleciona o ememento que vai receber o novo item
var container = document.querySelector("#container");
//inserindo elemento filho no pai 
container.appendChild(el);

// criando novo elemento
var el2 = document.createElement("div");
// defindo no nome da classe
el2.classList ="div-criada-before";
//selecionando o item de referência
var el3 = document.querySelector("#container .div-criada");
// criando elemento paragrafo 
var paragrafo = document.createElement("p");
// inserindo texto no pagragrafo
texto=document.createTextNode("isso foi criado em java");
// aplicando o texto ao paragrafo
paragrafo.appendChild(texto);
//  inserir a nova div antes da anterior
container.insertBefore(el2, el3);
// adicionando o novo paragrao a nova div
el2.appendChild(paragrafo);

var itemlista = document.querySelector("#lista");
console.log(itemlista);
var item = document.querySelectorAll('li')
//item[1].textContent="Item 02";
item.forEach(element => {
    console.log(element.textContent);
    
});


