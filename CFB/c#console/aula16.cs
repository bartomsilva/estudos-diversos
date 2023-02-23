using System;

class Aula16{

    static void Main(){

        
        int tempo=0;
        char escolha;

        inicial:

        Console.Clear();

        Console.WriteLine("Viagem até Escada");
        Console.WriteLine("escola o meio de transporte");
        Console.WriteLine("pode ser (a)Avião - (c)Carro - (o)Ônibus");
        
        escolha=char.Parse(Console.ReadLine());

        switch(escolha){
            case 'a' :
                tempo=50;
                break;
            case 'c' :
                tempo=400;
                break;
            case 'o' :
                tempo=600;
                break;
            default:
                tempo=-1;
                break;
        }
        if (tempo<=0){
            Console.WriteLine("meio indisponível");
        } else {
            Console.WriteLine("para o transporte escolhido o tempo é {0}",tempo);            
        }
        
        Console.WriteLine("deseja fazer nova seleção? (s)Sim - (n)Não: ");
        escolha=char.Parse(Console.ReadLine());
        
        if (escolha=='s'){
            goto inicial;
        }    
    }
}