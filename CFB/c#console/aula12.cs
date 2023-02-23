using System;

class Aula12{

    static void Main(){

        string Resultado="Reprovado";
        
        int nota1,nota2,nota3,nota4,media;
        nota1=nota2=nota3=nota4=media=0;
        
        Console.Clear();
        
        Console.Write("Digite a nota 1: ");
        nota1 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 2: ");
        nota2 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 3: ");
        nota3 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 5: ");
        nota4 = int.Parse(Console.ReadLine());

        media = (nota1+nota2+nota3+nota4);
        

        if (media >=60){
            Resultado = "Aprovado";
        }
        Console.WriteLine("a Soma das notas foi {1} e o Aluno foi {0}", Resultado,media);




    }
}