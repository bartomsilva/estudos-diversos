(async ()=>{
    const db=require('./db')
    console.log('inserir novo cliente')    
    await db.insereCliente({nome:'Bruno',idade:'42'})
    
    console.log('obter todos clientes de cliente_node')    
    const clientes=await db.todosClientes()
    console.log(clientes)
})()
 
