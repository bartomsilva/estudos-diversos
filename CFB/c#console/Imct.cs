using System;

class Pessoa
{
    // atributos
    public double peso, altura;
    public string nome;
 
     // Calculo 
    public double calculo()
    {
        return Math.Round(peso / (altura*altura));
    } 
    public double proporcao(double imc)
    {        
        return Math.Round((imc*100/24)-100,2);
    } 
    // Situaçao
    public string situacao(double imc)
    {    
        string retorno;  
        if (imc <= 18.5)
        { 
            retorno="Abaixo do Peso";
        }
        else if (imc < 25)
        {
            retorno="Peso Normal";
        }
        else if (imc < 30)
        {
            retorno="Acima do Peso";
        }
        else if (imc < 35)
        {
            retorno="Obesidade I";
        }
        else if (imc < 40)
        {
            retorno="Obesidade II";
        }
        else 
        {
            retorno="Obesidade III";
        }
        return retorno;
    }
    // Informação sobre o IMC
    public void mensagem()
    {
        // obter calculo
        double obterCalculo = calculo();
        // situação
        string obterSituacao = situacao(obterCalculo);
        // proporção
        double obterProporcao = proporcao(obterCalculo);

        Console.WriteLine("{0} <-peso x altura-> {1}",peso,altura);
        Console.WriteLine("{0} o seu IMC é {1} = {2}",nome,obterCalculo,obterSituacao);
        //Console.WriteLine(" na propoarção {0}%",obterProporcao);
        // 
    }
    
}

class aula{

    static void Main(){
        Console.Clear();
        Pessoa p1=new Pessoa();
        Console.Write("Seu Nome.............: ");
        p1.nome= Console.ReadLine();
        Console.Write("seu Peso (ex. 41,5)..: ");
        p1.peso=Convert.ToDouble(Console.ReadLine());
        Console.Write("sua Altura (ex: 1,50): ");
        p1.altura=Convert.ToDouble(Console.ReadLine());
        p1.mensagem();

        
        

        
    }
}