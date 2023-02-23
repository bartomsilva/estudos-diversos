using System;

class Aula18{

    static void Main(){

                //uma forma de criar matriz
        int[,] n=new int[3,5];  
        int[,] nova=new int[2,2]{{10,20},{30,40}}     
     /*
        
        limitar comentarios 

     */

       n[0,0]=00; 
       n[0,1]=01; 
       n[0,2]=02; 
       n[0,3]=03; 
       n[0,4]=04;
       
       n[1,0]=10; 
       n[1,1]=11; 
       n[1,2]=12; 
       n[1,3]=13;
       n[1,4]=14;

       n[2,0]=20; 
       n[2,1]=21; 
       n[2,2]=22; 
       n[2,3]=23; 
       n[2,4]=24;

       Console.WriteLine(n[0,3]);
       Console.WriteLine(n[1,3]);
       Console.WriteLine(n[2,3]);
        
    }
}