using System;

class Aula10{

    // criar um enumerador/tipo
    enum DiasSemana{Domingo,Segunda,Terça,Quarta,Quinta,Sexta,Sábado};
    //                  0      1      2     3      4      5     6
    static void Main(){

        //lançando valor direto
        DiasSemana ds = DiasSemana.Domingo;
        Console.WriteLine(ds);

        // operação (typecast) converte o indíce em item do tipo
        ds =(DiasSemana)3;
        Console.WriteLine(ds);

        // agora pega o indice converte para int (typecast)
        int dss=(int)DiasSemana.Quarta;
        Console.WriteLine(dss);
        dss=(int)ds;
        Console.WriteLine(dss);
     
    }
}
