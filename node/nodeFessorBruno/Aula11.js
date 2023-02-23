const http = require('http')
const eventos=require('events')
const EventoEmissor = new eventos.EventEmitter()

const final=()=>{
    console.log('fim do processo')
}

EventoEmissor.on('msg',()=>{console.log('Curso de Node')})
EventoEmissor.on('fim',final)

const porta = process.env.PORT || 3000
const retorno=()=>{console.log('servidor rodando')}
const servidor = http.createServer((req,res)=>{
    EventoEmissor.emit('msg')
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('CFG Cursos')
    EventoEmissor.emit('fim')
    res.end()
})
servidor.listen(porta,retorno)