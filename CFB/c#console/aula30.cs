using System;

public class Jogador{

    public int energia;
    public bool vivo;
    public string nome;

    //metodo(s) construtor(es) (mesmo nome da classe)
    public Jogador(){
        energia=100;
        vivo=true;
        nome="Jogador";
    }
    public Jogador(string nm){
        energia=100;
        vivo=true;
        nome=nm;
    }
    public Jogador(string nm,int ener){
        energia=ener;
        vivo=true;
        nome=nm;
    }
    public Jogador(string nm,int ener,bool vv){
        energia=ener;
        vivo=vv;
        nome=nm;
    }
    public void info(){
        string status="Morto";
        if (vivo){
            status="Vivo";
        }
        Console.WriteLine("Nome do Jogador..: {0}",nome);
        Console.WriteLine("Energia..........: {0}%",energia);
        Console.WriteLine("Status...........: {0}\n",status);              
    }
    ~Jogador(){ // metodo destrutor 
        
    }
}

class Aula30{

    static void Main(){

        Jogador j1=new Jogador();
        Jogador j2=new Jogador("Pedro");
        Jogador j3=new Jogador("Raul",80);
        Jogador j4=new Jogador("Relis",90,false);

        j1.info();
        j2.info();
        j3.info();
        j4.info();              

    }
}