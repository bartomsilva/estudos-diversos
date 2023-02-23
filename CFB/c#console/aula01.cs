//uma observação, estou adorando os conteúdos e replico para estudar a fundo, observei que para o método BinarySearch funcionar corretamente é preciso antes ordenar em array em ordem crescente, percebi isso pois vi que mesmo contendo o item indicado sempre retornava um valor esquisito.

// obs inserir esse fragmento de código após ter criado e 
// preenchido o vetor1
// aqui ordena o vetor em ordem crescente.
 // Array.Sort(vetor1);
 
     // exemplode cobinação que não vai encontrar
   // veja que 33 esta no indice 3 posição 4 
  // mas o programa vai dizer que não encontrado
  
        vetor1[0]=2;
        vetor1[1]=31;
        vetor1[2]=40;
        vetor1[3]=33;
        vetor1[4]=31;
        
// mostra os itens do vetor1
        Console.WriteLine("Elementos do VERTOR1");
        foreach(int n in vetor1){
            Console.WriteLine(n);
            
        }
        // public static int BinarySearch(array,valor); -1
        Console.WriteLine("Método BinarySerach de Array");
        
// numero a ser procurado
        int procurado=33;  // esta lá no indice 3 posição 4
// testei se ordenar o vetor e em alguns casos ele localiza sim o valor
// mas submetendo o teste a 5 variações forçando o item em posições diferentes
// o item não é localizado, caso não esteja ordenado o vetor.
        int pos=Array.BinarySearch(vetor1,procurado);
        if (pos>=0){
            Console.WriteLine("valor {0} está no indice {1} posição {2}",procurado,pos,pos+1);
        }else {
            Console.WriteLine("valor {0} {1} nao encontrado",procurado,pos);
        }