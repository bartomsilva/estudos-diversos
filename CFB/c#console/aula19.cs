using System;

class Aula19{

    static void Main(){
        // estudo do for 

        // exp1 inicializador = contador
        // pode ser uma variável externa ou criada 
        // no proprio for
        
        // int num;
        // for (num=0);
        // ou a varivel só para loop
        // for (int num=0)
        // exp2 expressão lógica duração do for
        // exp3 incremento ou decremento da exp1 
        
        int contador=0;

        for (int num=1; num <= 5; num++){
            contador++;
            Console.WriteLine("CFB CURSOS {0} {1}",num,contador);          
        }
        /*
        for (;;){
           contador++;
           Console.WriteLine("somado ate agora {0}",contador);
           if (contador==9){
               break;
           }
        }       
        */

        // criando o array 
        int[] vnum=new int[10];

        for (int i=0;i<vnum.Length;i++){
            vnum[i]=i+1;
        }

        foreach (int num in vnum){
            Console.WriteLine(num);
        }


    }
}