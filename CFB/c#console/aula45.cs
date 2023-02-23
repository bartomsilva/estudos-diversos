using System;
// não pode estanciar objetos 
 

// similiar a uma classe normal
struct Carro
{
    public string modelo;
    public string cor;
    
    public void info()
    {
        Console.WriteLine("Modelo ...:"+this.modelo);
        Console.WriteLine("Cor.......:"+this.cor);
        Console.WriteLine("--------------------");      
    }
}

class Aula45{

    static void Main(){

// array de struc
       Carro[] carros=new Carro[5];

       carros[0].modelo="FUSCA";
       carros[0].cor="AZUL";
       
       carros[1].modelo="BMW";
       carros[1].cor="BRANCO";
      
       carros[2].modelo="HB 20";
       carros[2].cor="PRETO";
       
       carros[3].modelo="JETRA";
       carros[3].cor="MARRON";
      
       carros[4].modelo="FOX";
       carros[4].cor="CINZA";
       
       for (int i=0;i<carros.Length;i++){
           carros[i].info();
       }
                
    }

}