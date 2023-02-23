using System;
using System.Collections.Generic;

class Aula56{

    static void Main(){

        // LISTA DUPLAMENTE ENCADEADA    
        LinkedList<string> transp = new LinkedList<string>();

        transp.AddFirst("Carro");
        transp.AddFirst("Avião");
        transp.AddFirst("Navio");
        transp.AddFirst("Motocicleta");
        transp.AddLast("Bicicleta");
        
        //////////////////////////////////////
        //para adicionar antes ou após um elemento deve deve ter
        // LinkedListNode<string>
        LinkedListNode<string> no;
        no=transp.FindLast("Navio");
        transp.AddAfter(no,"Patinete");
        no=transp.FindLast("Bicicleta");
        transp.AddBefore(no,"Patins");
        no=transp.FindLast("Motocicleta");
        transp.AddBefore(no,"Skate");

        Console.WriteLine("###");
         if(transp.Find("Navio")==null){
             Console.WriteLine("não encontrado");
         } else {
             Console.WriteLine("encontrado");
         }
         transp.Remove("Navio");

        
///////////////////////////////
        
        foreach (string item in transp)
        {
            Console.WriteLine("Transpote: {0}",item);
        }
    

    }
}