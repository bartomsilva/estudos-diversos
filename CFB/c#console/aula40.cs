using System;

abstract class Veiculo{

    public Veiculo(){

    }

    abstract public void info();
}

class Carro:Veiculo{

    public Carro(){

    }

    override public void info(){
        Console.WriteLine("porque isso?");
        
    }

}

class Aula40{

    static void Main(){
        Carro carro=new Carro();
        carro.info();
        Console.WriteLine("oxe");
        Console.WriteLine("Deus é fiel");
    }
}