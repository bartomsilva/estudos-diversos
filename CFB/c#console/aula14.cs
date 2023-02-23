using System;

class Aula14{

    static void Main(){
        
        string Resultado="";
        
        int nota1,nota2,nota3,nota4,media,soma;
        nota1=nota2=nota3=nota4=media=soma=0;
        
        Console.Clear();
        
        Console.Write("Digite a nota 1: ");
        nota1 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 2: ");
        nota2 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 3: ");
        nota3 = int.Parse(Console.ReadLine());

        Console.Write("Digite a nota 5: ");
        nota4 = int.Parse(Console.ReadLine());

        soma = (nota1+nota2+nota3+nota4);
        media = soma/4;
        if (media >=60){
             if (media>=90){
                    Resultado = "Aprovado Com Louvor";   
             } else {
                    Resultado = "Aprovado";
             }
        }else if (media >=50){
                Resultado = "Recuperação";
        }else {
             Resultado = "Reprovado";
        }
         Console.WriteLine("a soma das notas deu {0} a média foi {1} - Resultado: {2}", soma,media,Resultado);

        }
    }