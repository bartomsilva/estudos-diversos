
var container = document.querySelector('#container');
console.log(container);
// apagar elementos

// var novoParagrafo = document.createElement("p");
// var texto = document.createTextNode('texto criado via DOM, utiliza o appendChild, porém usei o append e funcionou');
// var texto1 = document.createTextNode('texto criado via DOM, utiliza o appendChild, porém usei o append e funcionou');
// var texto2 = document.createTextNode('texto criado via DOM, utiliza o appendChild, porém usei o append e funcionou');

// novoParagrafo.appendChild(texto);
// novoParagrafo.appendChild(texto1);
// novoParagrafo.appendChild(texto2);
// p.appendChild(novoParagrafo);

var p = document.querySelector("#container p");
container.removeChild(p);
//p.remove();

// remover o elemento 
var subtitle = document.querySelector(".subtitle");
subtitle.remove();