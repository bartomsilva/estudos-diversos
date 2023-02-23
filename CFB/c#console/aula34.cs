using System;

public class Veiculo{ //Classe Base
    public int rodas;
    public int velMax;
    private bool ligado;
    public Veiculo(){

    }
    
    public void ligar(){
        ligado=true;
    }
    public void desligar(){
        ligado=false;
    }
    public string getLigado(){
        if (ligado){
            return "sim";            
        } else {
            return "não";
        }
    }
}

class Carro:Veiculo{ // Classe Derivada
    public string nome;
    public string cor;
    public Carro(string nome, string cor){ // método construtor
        desligar();
        rodas=4;
        velMax=120;
        this.nome = nome;
        this.cor=cor;
    }
}

class Aula34{

    static void Main(){

        Carro c1=new Carro("deDeus","Vermelho");

        Console.WriteLine("Nome.......: {0}",c1.nome);
        Console.WriteLine("Cor........: {0}",c1.cor);
        Console.WriteLine("N.Rodas....: {0}",c1.rodas);
        Console.WriteLine("Vel.Máxima.: {0}",c1.velMax);
        Console.WriteLine("Ligado.....: {0}",c1.getLigado());
                
    }
}

