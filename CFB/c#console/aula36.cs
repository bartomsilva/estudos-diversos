using System;

public class Veiculo{ //Classe Base
    public int velAtual; // public acessível tanto na classe base e derivadas (obj) e fora da classe através do método.
    private int velMax; // private acessível ( classe base )
    protected bool ligado; // protected acessível (classe base / classe derivada )
    public Veiculo(int velMax){
        velAtual=0;
        this.velMax=velMax;
        ligado=false;             
    }
    public String getLigado(){
        return (ligado?"sim":"não");
    }
    public int getVelmax(){
        return velMax;
    }
}    
class Carro:Veiculo{ // Classe Derivada // herança
    public string nome;
    public Carro(string nome, int vm):base(vm){ // método construtor
        this.nome=nome;
        ligado=true;                        
    }          
}


class Aula36{
    static void Main(){

        Carro c1=new Carro("bonzao",120);
        Console.WriteLine("Nome.......: {0}",c1.nome);
        Console.WriteLine("Vel.Max....: {0}",c1.getVelmax());
        Console.WriteLine("Ligado.....: {0}",c1.getLigado());
        
        
    }
}


