
using System;


class Aula21a{
        
    static void Main(){

    string s1="123",s2="";
      
    do{
        Console.Clear();
        Console.WriteLine("Digite a Senha: ");
        s2=Console.ReadLine();
    }while(s1!=s2);
    Console.WriteLine("fim do programa");
      
    } 
}

