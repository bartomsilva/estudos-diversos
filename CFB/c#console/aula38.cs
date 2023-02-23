using System;

class Base {

    public Base(){
        Console.WriteLine("Construtor da classe Base!");
        
    }
    virtual public void Info(){
        
    }
}

class Derivada1:Base{ 
    public Derivada1(){
        Console.WriteLine("Construtor da classe Derivada 1");
    }    
    override public void Info(){
        Console.WriteLine("Informativo classe Derivada 1");
    }
}
class Derivada2:Derivada1{ 
    public Derivada2(){
        Console.WriteLine("Construtor da classe Derivada 2");
    }
    override public void Info(){
        Console.WriteLine("Informativo classe Derivada 2");
    }    
}

class aula38{
    static void Main(){

        Derivada1 derivada1=new Derivada1();
        Derivada2 derivada2=new Derivada2();
        derivada1.Info();
        derivada2.Info();

        Base Ref;
        Ref=derivada1;
        Ref.Info();



        
    }    
}

    
