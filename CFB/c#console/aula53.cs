using System;

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
class Aula53
{
   static void Main(){
   
        int n1,n2,res;
        float result;

        n1=0;
        n2=1;
        res=0;
        
        try{
           res=n1/n2;
           result=Area.Quadrado(0);
           
        }catch(Exception e){
            Console.WriteLine("Ocorreu um Erro: {0}",e.Message);
            
        }finally{
   
        }
        try{
           result=Area.Retangulo(0,1);
        }catch(Exception e){
            Console.WriteLine("Ocorreu um Erro: {0}",e.Message);
            return;
        }finally{
   
        }
 
        Console.WriteLine("a divisão entre {0}/{1}={2} é ",n1,n2,res);
   }    
}