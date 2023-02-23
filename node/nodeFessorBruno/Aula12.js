const http = require('http')
const retorno=()=>{console.log('servidor rodando')}
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

const servidor = http.createServer((req,res)=>{
    if(req.url == '/envioDeArquivo'){
        const form = new formidavel.IncomingForm()

        form.parse(req, (erro,campos,arquivos)=>{
            console.log("filetoupload "+arquivos.filetoupload)
            const urlantiga = arquivos.filetoupload.path
            const urlnova = 'C:/Users/bart-dev/Documents/Estudo/'+arquivos.filetoupload.newFilename('teste')
            console.log(urlnova)
            fs.copyFile(urlantiga, urlnova, (erro)=>{
               if (erro) throw erro
                res.write('Arquivo movido')
                res.end()
            })
        })
    } else {    
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        
        res.write('<input type="submit" value="Enviar">')
        
        res.write('</form>')
        return res.end()
    }
    
})

servidor.listen(porta,retorno)