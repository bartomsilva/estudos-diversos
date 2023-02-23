using System;

class Aula25{

    static void Main(){

        int num=10;
        dobrar1(ref num);
        Console.WriteLine(num);
        num=dobrar2(num);
        Console.WriteLine(num);


    }

    // metodo com passagem por referência
    // altera o valor da variável efetivamente 
    static void dobrar1(ref int valor){
        valor *=2;
    }
    // metodo com passagem por valor 
    // retornando um valor
    static int dobrar2(int valor){
        return valor *=2;
    }
}