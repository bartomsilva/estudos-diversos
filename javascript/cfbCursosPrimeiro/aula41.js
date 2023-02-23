
// contador clássica
function contador(min,max){        
    if(min<=max){
        console.log(min)
        contador(++min,max)
    }
}
contador(10,10)

//fatorial classica
function fatorial(n){
    if(n==1){
        return 1
    }
    return n*fatorial(n-1)
}
const n=5
console.log(`fatorial de ${n} = ${fatorial(n)}`)

