using System;

class Mat{

    public static double pi=3.15;

    public static int dobro(int n){
        return n*2;
    }
   
}

class Aula49{

    static void Main(){
 
        double vpi = Mat.pi;
        int num=10;
        Console.WriteLine(Mat.dobro(num));

    }
}
