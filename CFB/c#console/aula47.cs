using System;

// sobrecarga de métodos
// pode ter o mesmo nome com tipos diferentes
// int - double

class Calc
{
    public int soma(params int[]n)
    {
        int s=0;
        for (int i=0;i<n.Length;i++)
        {
            s += n[i];
        }
        return s;
    }
    public double soma(params double[]n)
    {
        double s=0;
        for (int i=0;i<n.Length;i++)
        {
           s += n[i];
        }
        return s;
    }  
    static public int somar(params int[]n)
    {
        int s=0;
        for (int i=0;i<n.Length;i++)
        {
            s += n[i];
        }
        return s;
    }
    static public double somar(params double[]n)
    {
        double s=0;
        for (int i=0;i<n.Length;i++)
        {
           s += n[i];
        }
        return s;        
    }   
    
}
////////////////////
class Aula47
{
    static void Main()
    {
// instanciando um objeto Calc
        Calc calc=new Calc();
        var res1 = calc.soma(10,20);
        var res2 = calc.soma(10.5,20.5);
        Console.WriteLine(res1);        
        Console.WriteLine(res2);
// usando a função direto (static)
        var s1=Calc.somar(10,20);
        var s2=Calc.somar(10.5,20.5);
        Console.WriteLine(s1);  
        Console.WriteLine(s2);                
    }
}