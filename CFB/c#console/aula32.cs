using System;

public class Calculos{

    public int v1;
    public int v2;

    public Calculos( int v1, int v2){
        this.v1=v1;
        this.v2=v2;       
    }

    public int somar(){
           return v1+v2;

    }
}

public class Aula32{

    static void Main(){
         
        Calculos a=new Calculos(4,4);
        Calculos b=new Calculos(3,3);
        Calculos c=new Calculos(2,2);
         
        Console.WriteLine(a.somar());
        Console.WriteLine(b.somar());
        Console.WriteLine(c.somar());
       
    }
}