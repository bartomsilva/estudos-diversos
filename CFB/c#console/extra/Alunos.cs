using System;

class Aluno{

    public string nome;
    public double nota1,nota2;

    // media 
    public double Media()
    {
        return (nota1+nota2)/2;
    }

    // situação
    public string Situacao(double media)
    {
        return media >=7 ? "Aprovado!" : "Reprovado";
    }

    // mensagem
    public void Mensagem()
    {
        double media = Media();
        string situacao=Situacao(media);

        Console.WriteLine("O aluno {0} foi {1} com média {2}",nome,situacao,media);

    }

    class Alunos
    {
        static void Main()
        {

           Aluno a1=new Aluno();
           Aluno a2=new Aluno();
           a1.nome="Pedro";
           a1.nota1=10;
           a1.nota2=10;
           a1.Mensagem(); 
           Console.WriteLine("------------------------");          
           a2.nome="Gui";
           a2.nota1=10;
           a2.nota2=9;
           a2.Mensagem(); 



        }
    }

}