
class Aula11{

    static void Main(){
using System;

        //exemplo de conversão implicita
        int n1 = 10;
        float n2=n1;

        Console.WriteLine("n1 {0} n2 {1}",n1,n2);

        // operação de type cast
        float n3=10.6f;
        int n4=(int)n3;  // informando o tipo para converer

        // imprimndo utilizando indice
        Console.WriteLine("n3 {0} n4 {1}",n3,n4);   
        // inprimndo utilizando concatenação
        Console.WriteLine("n3 "+n3+" n4 "+n4);

        int vInt=1001;
        short vShort=(short)vInt;
        Console.WriteLine(vShort);

        int sera;
        string valor="10";
        sera=Convert.ToInt32(valor);
        Console.WriteLine(sera);
        sera=int.Parse(valor);
        Console.WriteLine(sera);



    }
}