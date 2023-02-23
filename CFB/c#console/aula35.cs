using System;

public class Veiculo{ //Classe Base
    private int rodas;
    public int velMax;
    private bool ligado;
    public Veiculo(int rodas){
        this.rodas=rodas;       
    }
    public void ligar(){
        ligado=true;
    }
    public void desligar(){
        ligado=false;
    }
    public string getLigado(){
        // operador ternário
        return (ligado?"sim":"não");
    }
    public int getRodas(){
        return rodas;
    }
    public void setRodas(int rodas){
        if (rodas <=0){
            this.rodas=0;
        }else if (rodas > 40){
            this.rodas=40;
        }else {
            this.rodas=rodas;
            
        }
    }
}

class Carro:Veiculo{ // Classe Derivada
    public string nome;
    public string cor;
    public Carro():base(4){ // método construtor
        desligar();
        velMax=120;
        nome="Passeio";
        cor="Branca";
    }    
    public Carro(string nome, string cor, int rodas):base(rodas){ // método construtor
        desligar();
        velMax=120;
        this.nome = nome;
        this.cor=cor;
    }
    
}

// classe Derivada de: Carro <---- Veículo
class carrodeCombate:Carro{
    public int municao;
        
    public carrodeCombate():base("Carro de Combate","Verde",20){
        municao=100;
    }
    public carrodeCombate(int rodas):base("Carro de Combate","Verde",rodas){
        municao=100;
    }    
}
class Aula35{

    static void Main(){

        Carro c1=new Carro();

        Console.WriteLine("Nome.......: {0}",c1.nome);
        Console.WriteLine("Cor........: {0}",c1.cor);
        Console.WriteLine("N.Rodas....: {0}",c1.getRodas());
        Console.WriteLine("Vel.Máxima.: {0}",c1.velMax);
        Console.WriteLine("Ligado.....: {0}",c1.getLigado());
        Console.WriteLine("-x-x-x-x-x--x-x-x-x-x-x-x-x-x");
        
        carrodeCombate c2=new carrodeCombate();

        Console.WriteLine("Nome.......: {0}",c2.nome);
        Console.WriteLine("Cor........: {0}",c2.cor);
        Console.WriteLine("N.Rodas....: {0}",c2.getRodas());
        Console.WriteLine("Vel.Máxima.: {0}",c2.velMax);
        Console.WriteLine("Ligado.....: {0}",c2.getLigado());
        Console.WriteLine("Munição....: {0}",c2.municao);
                
    }
}


