using System;

class Aula24{

    static void Main(){

        int resu, x, y;

        x=100;
            y=80;

        soma(x,y);
        resu=soma2(x,y);
        Console.WriteLine("O resultado da soma de {0} mais {1} = {2}",x,y,resu);

        Console.WriteLine(soma3(y,x));
        Console.WriteLine(soma3(x,y));
    }

    static void soma(int n1, int n2){
        int res=n1+n2;
        Console.WriteLine("a soma de {0} mais {1} é igual a: {2}",n1,n2,res);
    }

    static int soma2(int n1, int n2){
        int res=n1+n2;
        return res;
    }

    static Boolean soma3(int n1, int n2){
        int res=n1+n2;
        Boolean retorno=false;
        if (n1>n2){
            retorno=true;
        }
        return retorno;
    }

}