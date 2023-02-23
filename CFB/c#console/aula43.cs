using System;

interface ICarro
{
    void salvar();
    void info();
}

interface ICombate
{
    void danos();
} 

class Carro: ICarro, ICombate
{
    private string nome;

    public string Nome{

        get{ return nome;  }
        set{ this.nome = value; }
    }

    public Carro(string nome){

        this.nome = nome;
        danos();
        salvar();
        info();
    }

    public void danos(){
        Console.WriteLine("por causa do pecado perecemos...");
    }
    public void salvar(){
        Console.WriteLine("só Jesus Salva!");
    }
    public void info(){
        Console.WriteLine("João 3:16.....");
    }
}

class aula43{

    static void Main(){

        Carro carro=new Carro("Super");

        Console.WriteLine("carro nome "+carro.Nome );

    }
}