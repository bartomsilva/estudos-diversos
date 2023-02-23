const express = require('express')
const db=require('./db')    
const url = require('url')
// precisa instar o cors para poder utilizar
// servidor e aplicaçao no react na mesma máquina
const cors = require('cors');

const porta = process.env.PORT || 5000
var paramEntrada='' 

const app=express()

// necessário para poder liberar o acesso local
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //essencial sem ele nada feito.
    app.use(cors());

    // pega o que vai ser feito (consultar, incluir, alterar, excluir)
    paramEntrada=url.parse(req.url,true).query

    next();
});
//////////

app.get('*',(req,res)=>{

    (async ()=>{
        if (paramEntrada.objetivo=='Consultar'){res.send(await db.todosClientes())}
        //await db.insereCliente({nome:'Bruno',idade:'42'})        
        
        //await db.atualizaCliente(id,{nome:nom,idade:ida})    
    })()

})

app.listen(porta,()=>{console.log('servidor on port - '+porta)})

