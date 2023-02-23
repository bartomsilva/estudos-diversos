"use strict"
const print=console.log.bind()

const people={
    name:"Bart",
    age:55,
    curse:"Labenu Ozemela",
    languages:{
        lang1:"Fortan",
        lang2:"Pascal",
        lang3:"Clipper",
        lang4:"C#",
        lang5:"Javascript",
        lang1:"Java",
        lang1:"Python"
    }
}
//print(people)
const objJson=JSON.stringify(people)
//print(objJson)

const stringJson='{"name":"Bart","age":55,"curse":"Labenu Ozemela","languages":'+
'{"lang1":"Python","lang2":"Pascal","lang3":"Clipper","lang4":"C#","lang5":"Javascript"}}'

const jsonObj=JSON.parse(stringJson)
print('de json para objeto\n',stringJson,'\n',jsonObj)
