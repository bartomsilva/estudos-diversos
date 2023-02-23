using System;

public class Meuvetor{

    //Array / Vetor - Curso Programação Completo C# - Aula 17
    public int[] vetor=new int[1];

    // metodo construtor
    // cria o vetor no tamanho passado
    public Meuvetor(int tam){
        Array.Resize(ref vetor,tam);
    }
    // metodo que modifica o tamanho do vetor
    public void Tamanhovetor(int tam){
        Array.Resize(ref vetor,tam);
           
    }
}

public class Aula32m{

    static void Main(){
         
        // metódo do exercicio
        Meuvetor a=new Meuvetor(5);
                
        // Métodos para arrays #P1 - Curso Programação Completo C# - Aula 23 
        Random radom=new Random();

        //Loop FOR / Estruturas de iteração - Curso Programação Completo C# - Aula 19
        //preenche o vetor e imprime os valores
        for (int i=0;i<a.vetor.Length;i++){
            a.vetor[i]=radom.Next(100);
            Console.WriteLine(a.vetor[i]);
        }
        Console.WriteLine("--------------");
        // redimensiona o vetor
        a.Tamanhovetor(3);

        // Loop FOREACH / Estruturas de iteração - Curso Programação Completo C# - Aula 22
        // imprime o vetor apos derimensionar
        foreach (var item in a.vetor)
        {
            Console.WriteLine(item);
        }        
    }
}