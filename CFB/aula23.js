// parâmetros com valores padrão

function soma(n1=0,n2=0){
    return n1+n2
}
//console.log( soma() )

// parametro rest
function somaM(...valores){
    let soma=0
    for ( let valor of valores) soma+= valor    
    return soma
}
//console.log(somaM(1,2,3))

// érôu fanction 
const erouF1 =()=>{}
const erouF2 =x=>{}  // apenas parametro não preciso de chaves
const erouFsoma =(...valores)=>{
    let soma=0
    for ( let valor of valores) soma+= valor    
    return soma
}
//console.log(erouFsoma(1,2,3))