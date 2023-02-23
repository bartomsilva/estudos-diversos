using System;

class Aula51
{
    
    static void Main( string[] args)
    {
        int x=0;
        if(args.Length>0)
        {
            foreach (var item in args)
            {
                x++;
                Console.WriteLine("Argumento "+x+" = "+item);
            }
        }
    }
}