using System;

class Carro{

    private int velMax;
    public int vm{  // não é metodo é um propriedade / (metódo)
        get {
            return velMax;
        }
        set {
            if (value<0){
                velMax=0;
            } else if (value >300){
                velMax=300;
            } else {
                velMax=value;
            }
        }
    }
    public Carro(){// construtor
        vm=120; // limite 300
    }       
}

class Aula41{

    static void Main(){

        Carro c1=new Carro();

        c1.vm=200;     
        Console.WriteLine("velocidade {0}",c1.vm);
        Console.WriteLine(c1.vm);
        
    }
}