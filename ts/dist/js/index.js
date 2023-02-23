"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 50;
console.log(x);
// inferencia x annotation
let y = 12; // inferencia
let z = 12; // annotation
// tipos basico
let nome = 'barto';
const ativo = true;
console.log(typeof (ativo));
//oject
const myNumber = [1, 2, 3];
myNumber.push(5);
console.log(myNumber);
//tuplas-<tuple
let myTuple;
myTuple = [5, "teste", ['a', 'b']];
console.log(myTuple);
//object literals-> { prop:value }
const user = {
    name: 'bart',
    age: 55
};
console.log(user);
console.log(user.name);
// any - contra a ideia do typescript 
// na minha visão uma forma de tirar o javascript de sena
let a = 0;
a = "teste";
a = true;
a = [];
//union type  - união de tipos
// na minha visão uma forma de tirar o javascript de sena
let id = "20";
const userId = 10;
const productId = "00001";
//enum 
//tamanho de roupas
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: 'Camia gola v',
    size: size.M
};
console.log(size);
console.log(camisa);
// literal types  
// valores fixos
let teste;
teste = null;
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
function sayAlo(name) {
    return 'Retorna String';
}
function logger(msg) {
    console.log(msg);
}
logger("não retorna nada : void");
// argumento opcional use a ?
function greeting(name, greet) {
    if (greet) {
        console.log(`olá ${greet} ${name}`);
    }
    else {
        console.log(`olá ${name}`);
    }
    // ternário
    //greet?console.log(`olá ${greet} ${name}`):console.log(`olá ${name}`)    
}
greeting('Bart');
greeting('Bart', 'Sr');
function somaNumber(nums) {
    return nums.n1 + nums.n2;
}
somaNumber({ n1: 1, n2: 2 });
// reaproveitar interface
function multNumber(nums) {
    return nums.n1 * nums.n2;
}
console.log(multNumber({ n1: 7, n2: 5 }));
// tipar variavel com interface
const ssomaNumber = {
    n1: 5,
    n2: 10
};
console.log(multNumber(ssomaNumber));
// narrowing 
// checagem de tipos 
// terórico
function algo(info) {
    if (typeof info === 'number') {
        console.log(`o número é ${info}`);
        return;
    }
    console.log('não foi passado um número');
    console.log(info ? 'chegou true' : 'veio false');
}
algo(false);
algo(true);
algo(20);
//generics
function mostraarray(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
mostraarray(a1);
mostraarray(a2);
// classes
class User {
    name;
    role;
    isAproved;
    // tipando aqui
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Cargo do Usuário é: ${this.role}`);
            return;
        }
        console.log('informação restrita');
    }
}
const zeca = new User('Zeca', "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
zeca.showUserRole(false);
class Car {
    marca;
    wheels;
    constructor(marca, wheels) {
        this.marca = marca;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é: ${this.marca}`);
    }
}
const fusca = new Car("VW", 4);
console.log(fusca);
//herança 
class SuperCar extends Car {
    engine;
    constructor(marca, wheels, engine) {
        super(marca, wheels);
        this.engine = engine;
    }
}
const carsuper = new SuperCar('Ferrari', 4, 5.0);
// decorators = para validação evento observado
//constructor decoration
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdDt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Bart');
console.log(sam);
class UserxAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const userx = new UserxAccount("Murphy", 1);
console.log(userx);
