using System;
					
public class Program
{
	public static void Main()
	{
		string[] estudantes = new string[] 
		{"Anderson", "Sandra", "Denise", "Bartô", "Karla", "Katia", "Lazaro",
		"Lucas", "Luciana", "Michel", "Norma", "Gui", "Pedrinho", "Sergio", "Francy", "Toninho"};
	    
		// Para ordenar de forma aleatória precisamos de uma variável auxiliar.
		Random sorteio = new Random();
		for (int i = 0; i < estudantes.Length - 1; i++)
		{
			int j = sorteio.Next(i, estudantes.Length);
			var temp = estudantes[i];
			estudantes[i] = estudantes[j];
			estudantes[j] = temp;
		}
		
		int x = 0, grupo = 1;
		foreach (string p in estudantes)
		{	
			if (x % 8 == 0) 
			{
				Console.WriteLine("\n\nGrupo " + grupo + ":");
				grupo++;
			}
			Console.WriteLine(" > " + p);
			x++;
		}
	}
}