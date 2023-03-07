//Criando Rotas no Servidor Node [NodeJS]
// sem utilizar FrameWorks

const http=require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res)=>{
    const url=req.url
    res.writeHead(200,{'Content-Type':'text/html'})
    if(url=='/'){
        res.write('<h1>Seja Bem Vindo</h1>')
    }else if(url=='/canal'){
        res.write('<h1>CFB Cursos</h1>')
    }else if(url=='/curso'){
        res.write('<h1>Curso de Node</h1>')
    }else{
        res.write('')
    }
    res.end()    
})
servidor.listen(porta,host,()=>console.log('Servidor Rodando'))





