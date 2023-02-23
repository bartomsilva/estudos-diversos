function soma(n1,n2){
    var result = (n1+n2);
    document.write(result);
}

function dataExtensso(imp){
    const data=new Date();
    const meses=["janeiro","fevereiro","março","abril","maio","junho",
               "julho","agosto","setembro","outubro","novembro","dezembro"]
    const mesess= new Array ("janeiro","fevereiro","março","abril","maio","junho",
    "julho","agosto","setembro","outubro","novembro","dezembro");
    const diaSemana =["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
    const result=diaSemana[data.getDay()]+", "+data.getDate()+" de "+meses[data.getMonth()]+" de "+data.getFullYear();
    if (imp!="i"){
        return result;
    } else {
        document.write(result);
    }
}

function troca(op){
        
    if(op==1){
        document.body.style="background: blue;";        
    } else{
        document.body.style="background: white;";
    }
}

function avisoEstoque(){
    const tabela=document.getElementById('tb_produtos');
    const nlin=tabela.getElementsByTagName('tr');
    let ncol=0;
    for (let i=1; i<nlin.length;i++){
        ncol = nlin[i].getElementsByTagName('td');
        nlin[i].style.textAlign="center"; 
//        var valorcol=parseInt(ncol[1].innerText);
      var valorcol=ncol[1].firstChild.nodeValue;
        if (valorcol <= 50){
            nlin[i].style.backgroundColor="#ffaaaa";
        }
    }
}


