const express = require('express')
const app=express() 
const port=process.env.POR 
const host='127.0.0.1'

app.get('/',(req,res)=>{
    res.send('CFB Cursos - Seja Bem Vindo')
})
app.get('/canal',(req,res)=>{
    res.json({
        canal:'CFB Cursos',curso:'nodeJs'})
})


app.listen(port || 3000,host,()=>console.log('servidor aula 04b on!'))
