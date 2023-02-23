using System;

// funciona como o switch / seletor 
// permite apontar para uma determinada função
// na pratica não vi ainda real funcionalidade
// porque poderia fazer direto... (ver em ****)

delegate int Op(params int[]n);

class Mat{
    
    public static int soma(params int[]n)
    {
        int resu=0;
        for (int i=0;i<n.Length;i++)
        {
            resu += n[i];
        }
        return resu;
    }   

    public static int mult(params int[]n)
    {
        int resu=n[0];
        for (int i=1;i<n.Length;i++)
        {
            resu *= n[i];
        }
        return resu;
    }   
}

class Aula50
{
    static void Main()
    {
        Op d1=new Op(Mat.soma);
        Console.WriteLine(d1(10,10));
        d1=new Op(Mat.mult);
        Console.WriteLine(d1(10,10));
///**** -> nesse mo alternativo economizo duas linhas de código
//////// creio que com o tempo achei uma justificativa
        Console.WriteLine("---------");

        Console.WriteLine(Mat.soma(10,10));
        Console.WriteLine(Mat.mult(10,10));
    }
}