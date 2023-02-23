
let x: number  = 50

console.log(x)

// inferencia x annotation

let y = 12 // inferencia

let z:number = 12 // annotation

// tipos basico
let nome: string = 'barto'
const ativo: boolean = true
console.log(typeof(ativo))

//oject

const myNumber: number[] = [1,2,3]
myNumber.push(5)
console.log(myNumber)

//tuplas-<tuple

let myTuple: [number, string, string[] ]
myTuple = [ 5,"teste", ['a','b']]
console.log(myTuple)

//object literals-> { prop:value }

const user: {name: string, age: number} = {
    name: 'bart',
    age:55 
}
console.log(user)
console.log(user.name)

// any - contra a ideia do typescript 
// na minha visão uma forma de tirar o javascript de sena

let a:any = 0
a = "teste"
a= true
a =[]

//union type  - união de tipos
// na minha visão uma forma de tirar o javascript de sena
let id: string | number = "20"

//type alias para union type
type myIdtype = number | string 

const userId: myIdtype = 10
const productId: myIdtype ="00001"

//enum 
//tamanho de roupas

enum size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}
const camisa = {
    name: 'Camia gola v',
    size: size.M
}
console.log(size)
console.log(camisa)


// literal types  
// valores fixos
let teste: 'autenticado' | null 
teste = null

//funções

function sum(a: number,b:number){
    return a + b
}
console.log(sum(10,10))

function sayAlo(name: string):string {
    return 'Retorna String'
}


function logger(msg: string):void {
    console.log(msg)
}
logger("não retorna nada : void")

// argumento opcional use a ?
function greeting(name:string, greet?:string){
  
  if(greet){
    console.log(`olá ${greet} ${name}`)
  } else {
    console.log(`olá ${name}`)    
  }
  // ternário
  //greet?console.log(`olá ${greet} ${name}`):console.log(`olá ${name}`)    

}
greeting('Bart')
greeting('Bart', 'Sr')


//interface do typescript para o javascript - formatos de entrada
interface funcMat {
    n1: number,
    n2: number
}

function somaNumber(nums: funcMat) {
    return nums.n1 + nums.n2
}
somaNumber({n1:1,n2:2})

// reaproveitar interface
function multNumber(nums: funcMat){
    return nums.n1 * nums.n2
}
console.log(multNumber({n1:7,n2:5}))

// tipar variavel com interface
const ssomaNumber:funcMat = {
    n1:5,
    n2:10
}
console.log(multNumber(ssomaNumber))

// narrowing 
// checagem de tipos 
// terórico

function algo(info: number | boolean){
    if (typeof info === 'number'){
        console.log(`o número é ${info}`)
        return
    }
    console.log('não foi passado um número')
    console.log(info?'chegou true':'veio false')    
}
algo(false)
algo(true)
algo(20)


//generics
function mostraarray<T>(arr: T[]){
    arr.forEach((item) =>{
        console.log(`Item: ${item}`)
    })
}
const a1 = [1,2,3]
const a2 = ['a','b', 'c']

mostraarray(a1)
mostraarray(a2)

// classes

class User {
    name
    role
    isAproved
    // tipando aqui
    constructor(name: string, role: string, isAproved:boolean) {
        this.name = name
        this.role = role
        this.isAproved = isAproved
    }
    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if (canShow){
            console.log(`Cargo do Usuário é: ${this.role}`)
            return            
        }        
        console.log('informação restrita')
    }
}
const zeca = new User('Zeca',"Admin",true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(true)
zeca.showUserRole(false)


// interface em classe interface letra maiuscula
/////////////////////////////////////////////////

interface IVeiculo {
      marca: string       // brand: string      
      showBrand(): void   // showBrand(): void
}

class Car implements IVeiculo {
    marca
    wheels
    constructor(marca: string, wheels: number){
        this.marca = marca
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`a marca do carro é: ${this.marca}`)        
    }
}
const fusca = new Car("VW",4)
console.log(fusca)

//herança 

class SuperCar extends Car {
    engine

    constructor(marca: string, wheels: number, engine: number){
        super(marca, wheels)
        this.engine = engine
    }
}

const carsuper = new SuperCar('Ferrari',4,5.0)

// decorators = para validação evento observado
//constructor decoration
function BaseParameters(){
    return function<T extends {new (...args: any[]): {} }>(constructor: T) {
           return class extends constructor {
            id = Math.random()
            createdDt = new Date();
           } 
    }
}
@BaseParameters()
class Person {
    name
    
    constructor(name: string){
        this.name =name         
    }
}
const sam = new Person('Bart')

console.log(sam)


interface Userx {
    name: string;
    id: number;
  }
   
class UserxAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
   
const userx:Userx = new UserxAccount("Murphy", 1);

console.log(userx)



