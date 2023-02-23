using System;

class Program {
  
  static void Main() {
    int[] n={0,1,2,3,4,5,6,55,55,77,66,12,31,22,8,9,11,12,13,14,15,16,17,18,18,20};
    Array.Sort(n);
    int procure=66;
    if (pesvetor(n,procure)){
      Console.WriteLine("busca do {0} com Sucesso",procure);
    } else {
      Console.WriteLine("falhou");
    }        
  }

  ////////////////////////////////////
  ///////                     ////////
  static Boolean pesvetor(int[]v, int x){
  // tamanho do vetor
    Boolean retorno=false; // para se familiarizar com os tipos
    int tm=v.Length;  // tamanho do vetor
    int res=tm%2; // resto da divisão = se vetor é par
    int[] vetor=new int[tm]; // vetor auxiliar
    int div; // meio do vetor
    vetor=v; // iguala o vetor auxiliar ao vetor original
    
    // verifica se o numero esta nas extremidades
    if (verinfim(vetor,x))
    { 
       return true;       
    } 
    else if (x>vetor[tm-1]) // se o ultimo elemeto for menor que o item 
    {
                           // significa que o numero não está na lista
      Console.WriteLine("numero {0} não está na lista",x);
      return false;
    }
    else 
    {
      if (res!=0) // vrerfifica se o tamnaho do vetor é divisivel por 2(metada)
      {
         Array.Resize(ref vetor,tm-1); // deixa o array uniforme
      } 

      div=tm/2;
      ///////////////////////////
      //for (;div>=2;){
      do{
        tm=vetor.Length;
        res=tm%2;
    
        if (res!=0) // vrerfifica se o tamnaho do vetor é divisivel por 2(metada)
        {
            Array.Resize(ref vetor,tm-1); // deixa o array uniforme
        } 
        
        div=tm/2;
        dividevetor(ref vetor,div,x);
        
        if (verinfim(vetor,x)){
           return true;
           
        }         
      }while (div>=2);
      return retorno;
    }     
  }

////////////////////////////////////////////////
/////////////// checa as extremidades /////////
  static Boolean verinfim(int[] x, int elem){

    Boolean retorno=false;
    if (x[0]==elem || x[x.Length-1]==elem){
      retorno=true;
    }
    return retorno;
  }
  /////////////////////////////////////
  //////////// divide o vetor /////////
  static void dividevetor(ref int[]v, int divs, int elem){
  // vetores auxiliares
    int[] v1=new int[1];
    int[] v2=new int[1];
    Array.Resize(ref v1,divs);
    Array.Resize(ref v2,divs);
    Array.Copy(v,v1,divs);
    Array.Copy(v,divs,v2,0,divs);
    if (v1[0]<=elem && v1[divs-1]>=elem){
      v=v1;
    } else {
      v=v2;
    }
  /////////////////////////////////////
  }
}