using System;

class Aula09{

    // estudo do bitwise  <<   e >> 
    // o deslocamento a esquerda dobra o valor
    //   ocorre que sai o primeiro bit e no final entra 0 ou zeros ....
    // o deslocamento a direita corta pele metade
    //   ocorre que saí o último bit e entra 0 ou zeros na frente....

    static void Main(){

        int num =10;

        num = num <<1;

        Console.Clear();

        Console.WriteLine("o valor que era 10 com << em 1 agora vale {0}",num);

        num = 10;

        num = num >>1;

        Console.WriteLine("o valor que era 10 com >> em 1 agora vale {0}",num);

        
    }
}