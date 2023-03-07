
const http = require('http')
const port= process.env.PORT
const host= '127.0.0.1'

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text-plain'})
    res.end('CFB Cursos - Aula04')
})
server.listen(port || 3000,host,()=>console.log('servidor aula 04 on!'))
