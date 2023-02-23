var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão','Uva',"Quiui"];

// criar elemento
var listaUl = document.createElement('ul');
var mdiv = document.createElement('div');

//var body = document.getElementsByTagName('body');
//console.log(body[0]);
//body[0].appendChild(listaUl);
var body = document.querySelector('body');
body.appendChild(listaUl);

// EXERCITANDO OS COMANDO E PROPRIEDADES
// mdiv.style.width='120px';
// mdiv.style.height='120px';
// mdiv.style.backgroundColor="#ff0000";
// body.appendChild(mdiv);
// mdiv.style.border="1px solid black";
// var paragrafo=document.createElement('span');
// var texto = document.createTextNode("isso é um span JS - DOM");
// paragrafo.appendChild(texto);
// mdiv.appendChild(paragrafo);
// mdiv.style.color="#fff"; 
// mdiv.style.textAlign="justify";
// mdiv.style.fontSize="10px";


//var listaNoBody = document.getElementsByTagName('ul');
var listaNoBody = document.querySelector('ul');

//console.log(listaNoBody[0]);

 for(var i = 0; i < lista.length; i++) {

   var liFor = document.createElement('li');
   var textoLi = document.createTextNode(lista[i]);
   liFor.appendChild(textoLi);
   //listaNoBody[0].appendChild(liFor);
   listaNoBody.appendChild(liFor);
 }

//utilizando o forEach 
lista.forEach(item => {
  var liFor=document.createElement('li');
  var textoLi = document.createTextNode(item);
  liFor.appendChild(textoLi);
  listaNoBody.appendChild(liFor);  
});