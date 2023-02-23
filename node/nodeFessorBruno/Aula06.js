const http = require('http')
const port = process.env.PORT 

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('CFB Cursos')
    res.end()
})
servidor.listen(port || 3000,()=>{console.log('servidor on')})