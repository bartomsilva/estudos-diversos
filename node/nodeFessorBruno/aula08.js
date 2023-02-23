(async ()=>{
    const db=require('./db')
    console.log('obter todos clientes de cliente_node')    
    const clientes=await db.todosClientes()
    console.log(clientes)
})()
 
