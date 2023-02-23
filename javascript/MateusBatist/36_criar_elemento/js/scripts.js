

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode('texto criado via DOM, utiliza o appendChild, porém usei o append e funcionou');

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');

body.append(novoParagrafo);

var container =  document.getElementById('container');
var container2 = document.querySelector('#container2');

var el = document.createElement("p");
el.appendChild(document.createTextNode("criado via DOM"));

var es = document.createElement("span");
es.appendChild(document.createTextNode("criado via DOM span"));


container.appendChild(es);
container2.appendChild(el);
console.log(body);








