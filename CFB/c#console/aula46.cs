using System;

class Galinha
{
    private string nomeGalinha;
    private int numOvo;
    public static int totalOvos=0;

    public Galinha(string nomeGalinha)
    {
        this.nomeGalinha=nomeGalinha;
        numOvo=0;
    }
    // Ovo é a Classe cria metodo botar que vai gerar o novo
    // objeto que é o ovo;

    public Ovo Botar()
    {
        numOvo++;
        totalOvos++;
        return new Ovo(numOvo,nomeGalinha);
    }
}

class Ovo
{
    private int numOvo;
    private string minhaGalinha;

    public Ovo(int numOvo,string minhaGalinha)
    {
        this.numOvo=numOvo;
        this.minhaGalinha=minhaGalinha;
        Console.WriteLine("Ovo {0} criado - Galinha {1} ",this.numOvo,this.minhaGalinha);
    }

}

class Aula46
{

    static void Main()
    {

/////////// objeto que retorna objeto        
        Galinha g1=new Galinha("g1-Cocorizinda");
        Galinha g2=new Galinha("g2-Jacopemba");
        Galinha g3=new Galinha("g3-Cantadeira");
         
        g1.Botar();  g2.Botar();  g3.Botar();
        g1.Botar();  g1.Botar();  g1.Botar();
        g2.Botar();
    
        

        Console.WriteLine("Total de Ovos "+Galinha.totalOvos); 
        
    }

}