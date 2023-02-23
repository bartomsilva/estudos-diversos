using System;

namespace Calc1
{
class Area
{
   public static float Retangulo(float l1, float l2)
   {
      if ( l1==l2 )
      { 
         throw new Exception("os lados não podem ser iguais");         
      }
      if ( l1<=0 || l2<=0 )
      { 
         throw new Exception("os lados não podem ser 0");         
      }
      return l1*l2;
   }
   public static float Quadrado(float l1)
   {
      if ( l1<=0 )
      { 
         throw new Exception("necessário um número maior que zero");         
      }
      return l1*l1;
   }
}
    
}

class teste:Calc1.Area{

}

class Aula54 
{
   static void Main(){
   
        int n1,n2,res;
        float result;

        n1=0;
        n2=1;
        res=0;
                
        Console.WriteLine(teste.Quadrado(5));

        try{
           res=n1/n2;
           result=Calc1.Area.Quadrado(0);
           
           
        }catch(Exception e){
            Console.WriteLine("Ocorreu um Erro: {0}",e.Message);
            
        }finally{
   
        }
        try{
           result=Calc1.Area.Retangulo(0,1);
        }catch(Exception e){
            Console.WriteLine("Ocorreu um Erro: {0}",e.Message);
            return;
        }finally{
   
        }
 
        Console.WriteLine("a divisão entre {0}/{1}={2} é ",n1,n2,res);
   }    
}