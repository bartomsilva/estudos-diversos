/*
A) Declarando classes

Uma maneira de definir uma classe é usando uma declaração de classe. 
Para declarar uma classe, você deve usar a 
palavra-chave class seguida pelo nome da classe (aqui "Retangulo").

B) Expressões de Classes

Uma Expressão de Classe (class expression) é outra forma para definir classes. 
Expressões de Classes podem possuir nomes ou não (anônimas).
O nome dado para uma expressão de classe é local ao corpo da classe.
*/

//A)

class retangulo {
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }
}
let _retangulo = new retangulo(20,10)
//console.log(_retangulo)
//console.log(_retangulo.altura*_retangulo.largura)

//B)
class Pessoa {
    constructor(nome,idade){
        this.id = Math.random()
        this.nome=nome
        this.idade=idade
    }
     
}
const eu = new Pessoa('Bart',55)
console.log('eu '+eu)
console.log(`Nome: ${eu.nome} Idade: ${eu.idade}  meu ID: ${eu.id} `)


let Pessoa2 = class Pessoal {
   constructor(nome,idade) {
     this.id = 'xxxx'
     this.nome = nome;
     this.idade = idade;
    }
  };
  
  const bart = new Pessoa2('Pedro',13)
  console.log(bart)

  let Retangulo = class {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };
  let meuretan = new Retangulo(10,20)
  console.log(meuretan)

