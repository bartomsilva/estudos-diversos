using System;

class Aula26{

    static void Main(){

        int valor1,valor2;
        int quociente,rest;
        valor1 = 99; 
        valor2 = 4;
        int valor3=0;
        int teste=10;
        int toma=1;


        int sera;
        quociente=divida(valor1,valor2,out rest, out sera );
        Console.WriteLine("{0}/{1} = {2} e o resto = {3} {4}",valor1,valor2,quociente,rest,sera);
        
        valor3=divida2(valor1,valor2,ref teste, out toma);
        Console.WriteLine("{0} {1} {2}",valor3,teste,toma);


    }

    static int divida(int v1, int v2,out int resto, out int test){
        resto=v1%v2;
        test=1000;
        return (v1/v2);
    }
    static int divida2(int v1, int v2,ref int x, out int sss){
        x=9898989;
        sss=8888;
        return (v1/v2);
    }
}