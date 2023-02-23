

const numeros=[1,22,33,4,5,6,7,8,9,11]
const pares=numeros.filter((x)=>{
    return x%2==0?true:false
})
console.log('---------- [ for in -------------')
for (n in numeros) console.log(numeros[n])
console.log('---------- for in ]-------------')
const impares=numeros.filter((x)=>{
    return x%2==0?false:true
})
console.log('--------- for of pares ---------')
//for ( y of pares) console.log(y)
console.log('-----------------')
console.log('---------- for of impares ------')
//for ( y of impares) console.log(y)

// retorna um array novo 
const novo = numeros.map(function(x){
    return x%2==0?'par: '+x:'imp: '+x
    })  
//for ( z of novo) console.log(z)
console.log('---- utilizando map --')
console.log(novo)

