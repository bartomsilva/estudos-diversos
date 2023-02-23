using System;

class Aula08{

    static void Main(){

        int v1,v2, soma;
        string nome="aaaa";

        //Console.Write("Digite seu nome: ");
        //nome=Console.ReadLine();

        Console.Write("Digite o valor de A: ");
        v1=int.Parse(Console.ReadLine());


        Console.Write("Digite o valor de B: ");
        v2=Convert.ToInt32(Console.ReadLine());

        soma=v1+v2;

        nome=soma.ToString();
        

        Console.WriteLine("A soma de {0} mais {1} é igual {2}",v1,v2,soma);

       
        Console.WriteLine(nome+ "<------");


    }
}