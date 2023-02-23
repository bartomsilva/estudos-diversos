using System;

class Aula22{

    static void Main(){

        int[] num=new int[5]{1,2,3,4,5};

        for (int i=0;i<=num.Length-1;i++){

            Console.WriteLine(num[i]);
        }

        foreach(int n in num){
            
            Console.WriteLine(n);

        }
            
       
    }

}