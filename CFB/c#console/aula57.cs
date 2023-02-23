using System;
using System.Collections.Generic;

class Aula56{

    static void Main(){

        List<string> carros=new List<string>();
        List<string> carros2=new List<string>();
        
        carros.Add("Golf");
        carros.Add("HRV");
        carros.Add("Focus");
        carros.Add("Argo");
        
                
        foreach (var item in carros)
        {
            Console.WriteLine(item);
        }
    

    }
}