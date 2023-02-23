let el=document.getElementsByTagName("div")
// o el tem o conteúdo de html collection (colecxion)
console.log(el)

// iterando os valores com Array direto (prototype)
// pegando os elmentos que eu quero
const val=Array.prototype.map.call(el,({innerText})=>innerText)

// convertendo html collection para aray
// utilizando o spread (spred) convertemos para array
el=[...el]

// convertendo html collection para aray
// utilizando o Array.from
const el2 = Array.from(document.getElementsByTagName('div'))

// convertendo html collection para aray
// utilizando Array.prototype.slice.call()
const el3=[].slice.call(document.getElementsByTagName('div'))

// podemos então utilizar o metódo map (mepi)
el.map((e,i)=>{
    console.log(e.innerText)
} )
console.log("------------------")
el2.map((e,i)=>{
    console.log(e.innerText)
} )
console.log("------------------")
el3.map((e,i)=>{
    console.log(e.innerText)
} )
console.log("------------------")
for(let v of val)
    console.log(v)

// uso do map
const conververInt=(e)=>parseInt(e)
let num=['1','2','3','4','5']
let num2=num.map()
console.log(num)
num=num.map(conververInt)
console.log(num)
