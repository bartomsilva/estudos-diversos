using System;
using System.Collections.Generic;

class Aula55{

    static void Main(){

        Dictionary <int,string> veiculos = new Dictionary <int,string>();

        veiculos.Add(10,"Carro");
        veiculos.Add(5,"Avião");
        veiculos.Add(0,"Navio");
        veiculos.Add(20,"Moto");
        veiculos.Add(15,"Patinete");

        Console.WriteLine(" tamanho do Dictionary "+veiculos.Count);
        
        //veiculos.Clear();
        int chave=21;
        // ContainsKey busca a chave e retorna true / false
        if (veiculos.ContainsKey(chave)){
            Console.WriteLine("a chave {0} esta na coleção ",chave);
        } else
        {
            Console.WriteLine("a chave {0} não esta na coleção ",chave);
        }

        veiculos[15]="Bike";

        string chave2="Bike";
        // faz pesquisa pelo valor retorna true ou false
        if (veiculos.ContainsValue(chave2)){
            Console.WriteLine("a chave {0} esta na coleção ",chave2);
        } else
        {
            Console.WriteLine("a chave {0} não esta na coleção ",chave2);
        }
        //      >>>>>>>>>>>>>>>>>>>>>>>
        foreach(KeyValuePair<int,string> v in veiculos){
            Console.WriteLine(v.Key+"  "+v.Value);
        }

        Dictionary<int,string>.ValueCollection valores=veiculos.Values;
        foreach(string v in valores){
            Console.WriteLine(v);
        }

    }
}