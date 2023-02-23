const express = require('express')
const app=express()
const port = process.env.PORT 

app.get('/',(req,res)=>{
    res.send('Seja bem vindo')
})
app.listen(port || 3000,()=>{console.log('servidor on')})