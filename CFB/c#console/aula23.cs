using System;

class Aula23{

 
    static void Main(){

        int[]  vetor1=new int[5];
        int[]  vetor2=new int[5];
        int[]  vetor3=new int[5];
        int[]  vetor4=new int[3];
        
        

       // int[,] matriz=new int[2,5]{{11,22,00,44,55},{66,77,88,99,00}};
       
       //classe Random criou o objeto random
        Random random=new Random();
        for(int i=0;i<vetor1.Length;i++){
            vetor1[i]=random.Next(30,40); // next() - next(maximo) - next(min,max)
        }
        
        // exemplo.. em que não encontra. sem ordenar o vetor
        vetor1[0]=2;
        vetor1[1]=31;
        vetor1[2]=40;
        vetor1[3]=33;
        vetor1[4]=31;
        // para verificar a veracidade de que o BinarySearch não
        // fucionara sem ordenar é só comentar a liha a baixo
        Array.Sort(vetor1);
        
        Console.WriteLine("Elementos do VERTOR1");
        foreach(int n in vetor1){
            Console.WriteLine(n);
        }
        // public static int BinarySearch(array,valor); -1

        Console.WriteLine("Método BinarySerach de Array");
        
        int procurado=33;
        int pos=Array.BinarySearch(vetor1,procurado);
        if (pos>=0){
            Console.WriteLine("valor {0} está no indice {1} posição {2}",procurado,pos,pos+1);
        }else {
            Console.WriteLine("valor {0} {1} nao encontrado",procurado,pos);
        }
        Console.WriteLine("---------------------------------------");
       //
       
        //public static void Copy(origem, destino, num elementos)

        Console.WriteLine("metódo Copy de Array  ");
        Array.Copy(vetor1,vetor2,vetor1.Length);
        Console.WriteLine("conteúdo do vetor2");
        foreach(int n in vetor2){
            Console.WriteLine(n);
        } 
        Console.WriteLine("---------------------------------------");
        

        // public void CopyTo(destino,apartir do incide)

        Console.WriteLine("metódo do Vetor CopyTo");
        vetor1.CopyTo(vetor3,0);
        Console.WriteLine("elementos do vetor 3");
        foreach(int n in vetor3){
            Console.WriteLine(n);
        }
        Console.WriteLine("---------------------------------------");  

        // public log GetLongLenghth(dimensao) - tamanho do vetor

        Console.WriteLine("método GetLongLength");
        long qev1=vetor1.GetLongLength(0);
        Console.WriteLine("o numero de elementos d0 vetor1 é {0}",qev1);
        Console.WriteLine("length é {0}",vetor1.Length);
        Console.WriteLine("---------------------------------------");  
  
        // pubic int GetLowerBound(dimensao) - menor indice do vetor 
        Console.WriteLine("método GetLowerBound");
        int miv1=vetor1.GetLowerBound(0);
        Console.WriteLine("o menor indice do vetor1 é {0}",miv1);
        Console.WriteLine("---------------------------------------");  

        // public int GetUpperBound(dimensao) - maior indice do vetor 
        Console.WriteLine("método GetUpperBound");
        int maiv1=vetor1.GetUpperBound(0);
        Console.WriteLine("o maior indice do vetor1 é {0} {1}",maiv1,(vetor1.Length-1));
        Console.WriteLine("---------------------------------------");  

// public object GetValue(long indice)
        Console.WriteLine("método GetValue");
        int valor =Convert.ToInt32(vetor1.GetValue(3));
        int valor1=vetor1[3]; // faz o mesmo
        Console.WriteLine("valor no Indice (3) do vetor1 é {0}",valor);
        Console.WriteLine(valor1);
        Console.WriteLine("---------------------------------------");  
        
        // public static int IndexOf(array,valor) // retorna o primeiro indice do item
        Console.WriteLine("IndexOf");
        int indice1 = Array.IndexOf(vetor1,31);
        Console.WriteLine("indice do primeiro número 31 {0}",indice1);

       // public static int LastIndexOf(array,valor) // retorna o ultimo indice de item 
        Console.WriteLine("LastIndexOf");
        
        int ind2 = Array.LastIndexOf(vetor1,31);
        Console.WriteLine("indice do Ultimo número 31 {0}",ind2);
        
        string s1 = "animal";
        int posi1, posi2;
        posi1 = s1.IndexOf('a');
        posi2 = s1.LastIndexOf('a');
        Console.WriteLine("em ANIMAL o a está nos indices {0} {1}",posi1,posi2);

        char[] marray = {'a', 'b', 'c', 'a', 'e', 'a', 'g', 'h'};
        
        string sarray ="abcaeagh";
          
        int indx1 = Array.LastIndexOf(marray, 'a',2);
        int indx2 = sarray.LastIndexOf("a",7);
                                    
        Console.WriteLine(" o ultimo A esta no indice {0}", indx1);
        Console.WriteLine(" o ultimo A esta no indice {0}", indx2);

        //public static void reverse(array)
        // inverte a ordem dos elementos de um array

        int resizee = 9;
        Array.Reverse(vetor1);
        Array.Resize(ref vetor1,resizee);
        Console.WriteLine(vetor1.Length);
        int x=0;
        foreach (var item in vetor1)
        {
            if (item<=0){
                vetor1[x]=1;
            }
            x++;
        }
        foreach (var item in vetor1)
        {
            Console.WriteLine(item);
            
        }

        Array.Resize(ref vetor4,vetor1.Length);
        vetor1.CopyTo(vetor4,0);
        Console.WriteLine("elementos do vetor 4");
        foreach(int n in vetor4){
            Console.WriteLine(n);
        }
        Console.WriteLine("---------------------------------------");  


    }
}