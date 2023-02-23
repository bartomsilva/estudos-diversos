const http = require('http')
const fs = require('fs')
const port = process.env.PORT 

const server=http.createServer((req,res)=>{
    fs.appendFile('aula05.txt','Curso de Node Aula 05b1',(err)=>{
        if(err)throw err
        console.log("arquivo criado")      
        res.end()
    })
  
})
server.listen(port || 3000,()=>{console.log('servidor on')} )
