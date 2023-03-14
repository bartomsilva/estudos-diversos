// função geradora

//const perguntas


// começa sempre com function
function* perguntas(){    
    let p=[
     { 
        pergunta: "ssssss",
        op1: "sss",
        op2: "yyy",
        res: "ssss"
     },
     { 
        pergunta: "dddddd",
        op1: "1111",
        op2: "2222",
        res: "3333"
     },
     { 
        pergunta: "rrrr",
        op1: "555",
        op2: "6666",
        res: "8888"
     },
     { 
        pergunta: "qqqq",
        op1: "swwwss",
        op2: "ywwyy",
        res: "swwss"
     },
     
    ]

    yield p[0]
    yield p[1]
    yield p[2]
    yield p[3]

        

}

let per=perguntas()
for ( let i=1; i <= 4; i++){
    console.log( per.next().value)
}