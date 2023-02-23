using System;

public class jogador{
     
     public int energia=100;
     public bool vivo=true;
     public string nome="";

}

class Aula28{

    static void Main(){

        jogador j1=new jogador();
        jogador j2=new jogador();

        j1.nome="barto";

        j1.energia = j1.energia/2;
        
        Console.WriteLine("status jogador {0} {1}% ",j1.nome,j1.energia);
        Console.WriteLine("status jogador 2 {0}k% ",j2.energia);

        



    }
}