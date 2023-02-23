//const pedro = document.getElementsByTagName("li");   
//const pedro = document.getElementsByClassName("example-item");
const pedro = document.querySelectorAll(".example li");    

// "uma flag" (das antigas anos 80) serve marcar, chavear
// tipo um liga desliga.
let $Aplicado = false;

//esconde o conteúdo explicativo 
document.getElementById("estudo_div").style.display = 'none';

function aplicarPropriedade() {
    // aplica ou remove a propeidade display: inline 
    // mostra ou esconde o texto explicativo     
    if ($Aplicado) {    
        for ( let i=0; i< pedro.length; i++){
             pedro[i].classList.toggle('aplicar-propriedade');        
         }
         $Aplicado=false;
        document.getElementById("estudo_div").style.display = 'none';
     } else {
        for ( let i=0; i< pedro.length; i++){
             pedro[i].classList.add('aplicar-propriedade');
        }
        $Aplicado=true;        
        document.getElementById("estudo_div").style.display = 'block';
    }
}

