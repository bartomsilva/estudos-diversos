using System;

class ValorExtensso
{

    public string valor;
            string[] unidades={" ","um","dois","três","quatro",
                              "cinco","seis","sete","oito","nove"};

        string[] dezenas={" ","dez","vinte","trinta","quarenta","cinquenta",
                                "secenta","setenta","oitenta","noventa"};
                                
        string[] centenas={" ","cem","duzentos","trezentos","quatrocentos",
                                  "quinhentos","seissentos","setecentos",
                                  "oitocentos","novecentos"};

        private string[] milhar={" ","mil","milhão","bilhão","trilhão"};
        private string[] milhars={" ","milhões","bilhões","trilhões"};    
          
        
		
    public ValorExtensso(double valor)
    {
        string val;
        val = Convert.ToString(valor);
        this.valor = val;
        
        
    }
    public string retorneUnidades(string valor)
    {
        
        //return unidades[]
    }

    //public string verunidade()
}

class valor
{

    static void Main()
    {
        ValorExtensso v1=new ValorExtensso(10);

        Console.WriteLine(v1.valor);

    }

}