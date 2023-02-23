using System;

class Program
{

    public static void Main()
    {
        tabuleiro();
    }

    static void tabuleiro()
    {

        string[,] tabuleiro = new String[3, 3];

        tabuleiro[0, 0] = "X";
        tabuleiro[0, 1] = "O";
        tabuleiro[0, 2] = "X";

        tabuleiro[1, 0] = "O";
        tabuleiro[1, 1] = "X";
        tabuleiro[1, 2] = "O";

        tabuleiro[2, 0] = "X";
        tabuleiro[2, 1] = "O";
        tabuleiro[2, 2] = "X";

        Console.WriteLine("    A | B | C");
        Console.WriteLine("   -----------");

        for (int r = 0; r < 3; r++)
        {
            Console.WriteLine(r + "   " + tabuleiro[r, 0] + " | " + tabuleiro[r, 1] + " | " + tabuleiro[r, 2]);
            Console.WriteLine("   -----------");
        }
    }
}




