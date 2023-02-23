using System;

public class Jogador{
    private int energia;
    private string nome;

    public Jogador(string nome){
        this.nome = nome;
        energia = 100;
    }
    public int getEnergia(){
        return energia;
    }
    public string getNome(){
        return nome;
    }
    public void setEnergia(int e){
        if (e < 0){ // entrada de valor negativo - subtrair energia
            e *= -1; // multiplica por menos 1 para ficar positivo
            if (energia-e>=0){  
                energia-=e;
            } else {
                energia = 0;
            }
        } else {
            if (energia+e <=100){
                energia +=e;                               
            } else {
                energia = 100;
            }
        }
    }
}

class Aula33{

    static void Main(){

        Jogador j1=new Jogador("Barto");

        Console.WriteLine("nome do jogador....: {0} ",j1.getNome());
        Console.WriteLine("energia do Jogador.: {0}",j1.getEnergia());
        j1.setEnergia(-70);
        Console.WriteLine("energia do Jogador.: {0}",j1.getEnergia());
        j1.setEnergia(-100);
        Console.WriteLine("energia do Jogador.: {0}",j1.getEnergia());
        j1.setEnergia(30);
        Console.WriteLine("energia do Jogador.: {0}",j1.getEnergia());
        j1.setEnergia(170);
        Console.WriteLine("energia do Jogador.: {0}",j1.getEnergia());

    }
}