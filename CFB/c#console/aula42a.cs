using System;

public class TempRecord
{
 // Matriz de valores de temperatura
    float[] temps = new float[10]
    {
        56.2F, 56.7F, 56.5F, 56.9F, 58.8F,
        61.3F, 65.9F, 62.1F, 59.2F, 57.5F
    };

    // Para habilitar o código do cliente para validar a entrada
    // ao acessar seu indexador.
    
    //public int Length = temps.Length;
    
    // Declaração do indexador.
    // Se o índice estiver fora do intervalo, o array temps lançará a exceção.
    public float this[int index]
    {
        get
        {
           return temps[index];
        }
        set
        { 
            temps[index] = value;
        }
    }
}
class Program
{
    static void Main()
    {
        var tempRecord = new TempRecord();

  // Usa o acessador set do indexador
        tempRecord[3] = 58.3F;
        tempRecord[5] = 60.1F;

 // Usa o acessador get do indexador
        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine("Elemento #{0} = {1}",i,tempRecord[i]);
        }

 // Mantenha a janela do console aberta no modo de depuração.
        Console.WriteLine("Press any key to exit.");
        Console.ReadKey();
    }
}