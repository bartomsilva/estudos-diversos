using System;
// não pode estanciar objetos 
 

// similiar a uma classe normal
struct Carro
{
    public string modelo;
    public string marca;
    public string cor;

    //construtor
    public Carro(string modelo,string marca, string cor)
    {
        this.modelo = modelo;
        this.marca  = marca;
        this.cor    = cor;
    }    
    public void info()
    {
        Console.WriteLine("**** Dados do Carro ****");
        Console.WriteLine("Modelo ...:"+this.modelo);
        Console.WriteLine("Marcarro..:"+this.marca);
        Console.WriteLine("Cor.......:"+this.cor);
        Console.WriteLine("\n");      
    }
}

class Aula44{

    static void Main(){

        //para criar um ojeto  
        Carro x1;
        x1.modelo="Passate";
        x1.marca="WolksWagem";
        x1.cor="Prata";
        // ou assim   
        Carro c1=new Carro("Hailux","Xing","Branca");
        Carro c2=new Carro("Fusca","WV","Verde");

        c1.info();
        c2.info();
        x1.info();

        
                
    }

}