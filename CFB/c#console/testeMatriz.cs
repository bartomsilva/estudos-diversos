using System;

// recursividade

////////////////////
class Testem
{
    static void Main()
    {
         int[] n=new int[100];  

        Random random=new Random();
        Random random2=new Random();
        
        for(int i=0;i<99;i++){
            n[i]=random.Next(1,4);  
            Console.Write(n[i]);
            Console.Write("-");
        }
            
    }
}