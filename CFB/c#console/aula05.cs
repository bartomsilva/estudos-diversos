using System;

class Aula05{

    static void Main(){

        int res=(10+5)*2;

        //operador relacional
        // variavel booleana
        bool res1=(10>5)&&(10==10);
        
        // res++  = res+=1  = res=res+1
        // o mesmo vale para ultiplicação e divisão
        res*=2; // res=res*2

        // operador logico
        //    &  and retorna true só se todas forem true
        //    |  or retorna false só se todas forem false


        Console.WriteLine(res);
        Console.WriteLine(res1);

        

    }
}