"use strict"

// ojeto literal semelhantes a classes
// container de inforações
// propriedades são as variáveis 
// métodos são as funções
const Carro = {
    marca: 'WV',
    modelo: 'Golf',
    ano: '2022',
    info:function(){ // não funcionou com arrow function  
        // mas sim com função anônima
        console.log("Marca.:"+this.marca)
        console.log("Modelo.:"+this.modelo)
    }
}

// desestruturacao
let {marca, modelo} = Carro

// formas de acessar
//console.log(Carro.marca)
//console.log(Carro['modelo'])
//Carro.info()
// modificar 
//Carro.marca = 'Honda'
//Carro.modelo = 'HRV'
//Carro.info()

// criar objeto com case em outro objeto

const Carro2=Object.create(Carro)

//console.log(Carro)
//console.log(Carro2) // vazio
//Carro2.info()  // idem ao Carro

const Caracteristicas = {
    cor: "Cinza",
    cambio: "Automatico"
}

const Logger = {
    id: Math.random(),
    createdDt: new Date(),
    cargo:''
}

//delete Logger.cargo // apagar propriedade do objeto

// somando juntando objetos 
const Fusca=Object.assign(Carro,Caracteristicas,Logger)

console.log(Fusca)

/*
class Pessoa {
    name     
    constructor(name){
        this.name =name    
        this.id = Math.random()
        this.cadastro = new Date()     
    }
}

const sam = new Pessoa('Bart')
console.log(sam)
console.log(sam['id'])
console.log(sam['name'])
console.log(sam['cadastro'])
*/
