using System;

class aula04{
    
    static int num = 10; //escopo global

    static void Main(){
        int num1=0; // escopo local
        Console.WriteLine(num);
        teste();
        
    }
    
    void teste(){
        int num2=0; //escopo local
        Console.WriteLine(num);
    }
}