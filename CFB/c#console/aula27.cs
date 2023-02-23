using System;

class Aula27{

    static void Main(){

        somap(77,99,0);
        
    }

    // metódo que recebe parametros variáveis
    static void somap(params int[]n){
        int soma=0;
        if ( n.Length<1){
            Console.WriteLine("impossível realizar a soma, sem valores");
        } else if(n.Length==1){
            Console.WriteLine("soma impossível informado apenas o valor {0}",n[0]);    
        } else {
            for (int i=0;i<n.Length;i++){
                soma+=n[i];
                Console.WriteLine(n[i]);
            }
            Console.WriteLine("o resultado soma acima é {0}",soma);
        }

    }
}