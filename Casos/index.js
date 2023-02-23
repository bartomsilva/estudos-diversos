const express = require('express')
const url = require('url')
// precisa instar o cors para poder utilizar
// servidor e aplicaçao no react na mesma máquina
const cors = require('cors');

const porta = process.env.PORT || 5000
var paramEntrada='' 

var carros = '[' +
  '{"id":1,"marca":"Honda","modelo":"HRV"},' +
  '{"id":2,"marca":"WV","modelo":"Golf"},' +
  '{"id":3,"marca":"Fiat","modelo":"Touro"},' +
  '{"id":4,"marca":"GM","modelo":"Traker"}' +
  ']'

  var alunos = '[' +
  '{"id":1,"nome":"Barto","idade":"55"},' +
  '{"id":2,"nome":"Sandra","idade":"48"},' +
  '{"id":3,"nome":"Fran","idade":"24"},' +
  '{"id":4,"nome":"Pedro","idade":"13"},' +
  '{"id":5,"nome":"Guilherme","idade":"3"}' +
  ']'
const app=express()

// necessário para poder liberar o acesso local
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //essencial sem ele nada feito.
    app.use(cors());

    // pega o que vai ser consultado (Carros ou Alunos)
    paramEntrada=url.parse(req.url,true).query

    next();
});
//////////

app.get('*',(req,res)=>{
    if (paramEntrada.objetivo=='Carros') res.send(carros)
    if (paramEntrada.objetivo=='Alunos') res.send(alunos)    
})

app.listen(porta,()=>{console.log('servidor on port - '+porta)})

