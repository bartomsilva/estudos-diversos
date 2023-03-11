import java.util.Scanner;

public class Loops {
    public static void main(String[] args){
        
        // idem o JS
        int number=0;
        for(int cont=0 ; cont<5; cont++){
            number=cont;
            System.out.println("Bart "+cont);
        }
        
        while(number>=0){
            System.out.println("Numero: "+number);
            number--;
        }

        do{
            System.out.println("numero: ("+number+")");
            number++;

        }while(number!=5);

    }
    
}
