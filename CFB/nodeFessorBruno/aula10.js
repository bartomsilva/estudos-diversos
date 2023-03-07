(async ()=>{
    const db=require('./db')
    
    //console.log('inserir novo cliente')    
    //await db.insereCliente({nome:'Bruno',idade:'42'})
    
    
    console.log('clientes de cliente_node')    
    console.log(await db.todosClientes())

    console.log('alterando dados do cliente')   
    const id=2
    const nom = 'Franciely'
    const ida = 25
   
    await db.atualizaCliente(id,{nome:nom,idade:ida})  

    
    console.log('clientes de cliente_node')    
    const clientes=await db.todosClientes()
    console.log(clientes)
})()
 
