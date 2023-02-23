using System;

// recursividade
class Calc
{
    public int fatorial(int n)
    {
        int res;
        if (n<=1)
        { 
            res=1;
        }else
        {
            // recursividade
            res = n * fatorial(n-1);
        }
        return res;
    }

    public int fibonacci(int n)
    {
        if (n<2)
        { 
           return n;
        } 
        else 
        { 
          return fibonacci(n-1)+fibonacci(n-2);
        }

    }
}
////////////////////
class Aula48
{
    static void Main()
    {
        int x = 10; // 
        int somafib=0;
        int fib=0;
        
        Calc calc=new Calc();
            
        while(x>0) 
        {

            Console.Write("Digite o Número.: ");
            x=Convert.ToInt32(Console.ReadLine());
            
            if (x<0)
            {
                break;
            }

            Console.WriteLine("\n********** FATORIAL DE "+x+" É "+calc.fatorial(x));
            Console.WriteLine("");
            Console.WriteLine("Sequencia Fibonacci de "+x);
            
            for (int i=0;i<=x;i++)
            {
                fib=calc.fibonacci(i);
                somafib+=fib;
                Console.Write(fib+" ");
            }
            Console.WriteLine(" / Total = "+somafib);
            Console.ReadLine();
            x=1;
            somafib=0
        }
    }
}