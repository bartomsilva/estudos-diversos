using System;

// classe jogador
public class jogador{
     public int energia;
     public bool vivo;
     public string nome;

    // metodo construtor ( mesmo nome da class)
     public jogador(string n){
         energia=100;
         vivo=true;
         nome=n;
     }
     ~jogador(){
         Console.WriteLine("todos jogadoes removidos");
     }
}

class Aula28{

    static void Main(){

        jogador j1=new jogador("Pedro");
        jogador j2=new jogador("Junior");

        j2.energia = j1.energia/2;
            j1.    
        Console.WriteLine("oo status jogador {0} {1}% ",j1.nome,j1.energia);
        Console.WriteLine("oo status jogador {0} {1}% ",j2.nome,j2.energia);

    }
}