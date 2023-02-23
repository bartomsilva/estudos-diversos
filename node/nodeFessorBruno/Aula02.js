//Criando um servidor simples em Node [NodeJS]
//sem muitos detalhes
//http.cat - códigos de retorno ( status )

const http = require('http')

http.createServer((request,response)=>{
    // codigo de status, escrita retorno tipo
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write('Segunda Aula Servidor Simples\n')
    response.write('-----------------------------\n')
    response.end("fim\n")
}).listen(1337)

