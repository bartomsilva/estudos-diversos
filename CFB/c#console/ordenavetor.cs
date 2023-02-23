using System;

class OrdanaVetor{
    
    static void Main(){
            
        //criando o vetor ( v ) e uma copia ( ori )    
        int[] v={10,1,4,33,44,22,11,9,-1,-90,8,7,6};
        int[] ori=new int[v.Length];
        v.CopyTo(ori,0); // guarda os valores originais

        // chama a função própria pra ordenar o vetor
        ordenav(ref v);
    
        Console.Clear();
        Console.WriteLine("\n");
        Console.WriteLine("valores originais");
        foreach (int item in ori){
                Console.Write(item);
                Console.Write(" ");
        }
        Console.WriteLine("\n");
        Console.WriteLine("ordenado");
        foreach (int item in v){
                Console.Write(item);
                Console.Write(" ");
        }
        Console.WriteLine();    
    }

    static void ordenav(ref int[]v ){

        int lim1=v.Length - 2; //a primeira lista corre ate o pnultimo ítem
        int lim2=v.Length-1; //  a segimda lista corre até o ultimo item
        int po1=0; // indice inicial do vetor
        int vo1=0; // valor inicial do vetor
        int vmenor=0; // menor valor
        int po2=0; // posição do elemento seguinte
            
        for (int ind1=po1;ind1<=lim1;ind1++){
            
            vo1=v[ind1]; // valor a ser comparado
            po1=ind1;    // indice do valor a ser comparado
            vmenor=vo1; // define menor valor como vo1

            for (int ind2=ind1+1;ind2<=lim2;ind2++){
                            
                if (vmenor > v[ind2]){ // seguinifica e  valor seguinte é o menor agora
                       
                   po2 = ind2;    // salva a posição do vetor - (menor valor)
                   vmenor=v[ind2]; // seta o valor menor
                } 
            }
            // agora vamos chegar se o menor valor mudou
            // caso sej resposta sim = vamos fazer a troca 
            // utilizando os ponteiros po1/po2 e vo1/vo2
            if (vmenor!=vo1){ // significa que houve mudança de status do menor valor
                v[po2]=v[ind1];
                v[po1]=vmenor;
            }            
        }
    }
}
