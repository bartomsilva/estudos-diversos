using System;
class aula03{
    static void Main(){
        
        //byte n1=10; // 0 a 255
        //int num=10;
        //char letra='b';
        //float valor=5.3f;
        string nome="bart";

        int num1, num2, res;
        num1 = 10;
        num2 = 100;
        res = num1*num2;

        
        // esse tipo de variavel (var)
        // tem o tipo atribuido
        // de acordo com o que
        // for inicializado

        var aux=nome;
        Console.WriteLine("valor da variável: "+aux+"...");
        Console.WriteLine(num1+" vezes "+num2+" é "+res);



    }

}