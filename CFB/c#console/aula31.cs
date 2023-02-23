using System;

//##########################
static public class Jogador{

    //classe static todos os seus componentes incluido metodos
    // precisam ser static

    static public int energia;
    static public bool vivo;
    static public string nome;
     
    //metodo / função
    static public void Inicio(string nm){
        energia=100;
        vivo=true;
        nome=nm;       
    }

    static public void info(){
        string status="Morto";
        if (vivo){
            status="Vivo";
        }
        Console.WriteLine("Nome do Jogador..: {0}",nome);
        Console.WriteLine("Energia..........: {0}%",energia);
        Console.WriteLine("Status...........: {0}\n",status);              
    }
}

//################## 
public class Inimigo{
    public string nome;
    static public bool alerta;

    // metodo construtor pode ter mais de um
    public Inimigo(string n){
        nome=n;
        alerta=false;
    }
    // metodos]/função de informação
    public void info(){
        Console.WriteLine(nome);
        Console.WriteLine(alerta);  
        Console.WriteLine("--------------------");            
    }
}  

//#################    
public class Aula31{

    static void Main(){

        Jogador.Inicio("Pedro");
        Jogador.info();
        
        // estanciando a classe para criar objetos com base na classe.
        Inimigo i1=new Inimigo("Jose");
        Inimigo i2=new Inimigo("Paulo");
        Inimigo i3=new Inimigo("Jackson");

        Inimigo.alerta=true; 
        
        Console.WriteLine(i1.nome); // acesso ao conteudo nome do objeto i1
        //i1.info();
        //i2.info();
       // i3.info();      
    } 
}
