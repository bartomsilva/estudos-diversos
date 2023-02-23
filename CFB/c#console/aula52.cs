using System;

class aula52
{
   static void Main(){
   
        int n1,n2,res;
        n1=10;
        n2=0;
        try{
           res=n1/n2;
        }catch(Exception e){
            Console.WriteLine("Ocorreu um Erro: {0}",e.Message);
            return;
        }
        Console.WriteLine("a divisão entre {0}/{1}={2} é ",n1,n2,res);
   }    
}