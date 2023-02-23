using System;


abstract class Veiculo{
    protected int velMax;
    protected int velAtual;
    protected bool ligado;

    public Veiculo(){
        ligado=false;
        velAtual=0;
    }
    public void setLigado(bool ligado){
        this.ligado = ligado;
    }
    public int getVelatual(){    
        return velAtual;
    }
    public string getLigado(){
        return (ligado?"Ligado":"Desligado");
    }

    abstract public void aceLeracao(int mult);
}

class Carro:Veiculo{ // Classe Derivada

    public Carro(){ // método construtor
        velMax=120;        
    }
    //obrigado a implementar o metodo
    // por ser abastract na base
    override public void aceLeracao(int mult){
        velAtual+=10*mult;
    }
}

class Aula39{

    static void Main(){

        Carro c1=new Carro();

        c1.aceLeracao(1);
        c1.setLigado(true);

        Console.WriteLine(c1.getVelatual());
        Console.WriteLine(c1.getLigado());
                    
    }
}


