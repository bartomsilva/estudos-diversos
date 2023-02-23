using System;

// o nome da classe primeira letra maiuscula
class Aula06{
   
    static void Main(){

        double ValorCompra=5.50;
        double ValorVenda;
        double Lucro=0.1;
        string produto="Pastel";
    
        ValorVenda=ValorCompra+(ValorCompra*Lucro);

        Console.WriteLine("Produto.....:{0,10}",produto);

        Console.WriteLine("Val Compra..:{0,10:C}",ValorCompra);
        Console.WriteLine("Lucro.......:{0,10:p}",Lucro);
        Console.WriteLine("Val. Venda..:{0,10:c}",ValorVenda);

    }
}