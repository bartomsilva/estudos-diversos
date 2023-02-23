using System;

class Aula20{

    static void Main(){
        
        int num=0;

        //cria o vertor numm com 10 posições
        int[] vnum=new vnum[10];

        while(num<=vnum.Length){
            Console.WriteLine("contator em {0} ",num);
            vnum[num]=num;
            num++;
        }
        
        for (int x;x<=vnum.Length;x++){
            Console.WriteLine(vnum[x]);
        }
    }
}