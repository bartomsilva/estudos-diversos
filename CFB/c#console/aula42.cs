using System;

class Carro{

    // criando o vetor
    private int[] velMax=new int[5]{10,80,70,200,130};
    //  criando o indexador
    public int this[int i]
    {   
        get 
        {
            return velMax[i];
        }
        set
        {
            if (value<0){
                velMax[i]=0;
            } else if (value >300){
                velMax[i]=300;
            } else {
                velMax[i]=value;
            }
        }
    }
    public Carro()
    {  
        Console.WriteLine("Deus é Amor");
    }  
}

class Aula42{

    static void Main(){

        Carro c1=new Carro();

        c1[0]=10;
        Console.WriteLine("velocidade {0}",c1[0]);
        	
    }
}