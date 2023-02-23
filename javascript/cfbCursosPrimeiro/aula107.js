let num = [10,1,9,2,8,3,6,5,7,4]
/*for (n of num)
    console.log(n)
*/

let nam =['alfred','richard','ketlyb','moanna']
/*for ( n of nam)
   console.log(n)
*/

let obj=[
    {marca: 'WV', modelo:'Fusca'},
    {marca: 'GM', modelo:'Camaro'}]

imprimeArry=(array)=>{
    array.forEach(element => {
        console.log(element)        
    })
}
imprimeArry(nam)
//imprimeArry(num)
console.log('---------------')
myImprimeArray=(arr)=>{
    for (element of arr )
        console.log(element)
}

myImprimeArray(nam)
myImprimeArray(obj)
