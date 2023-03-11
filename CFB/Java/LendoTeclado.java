import java.util.Scanner;

public class LendoTeclado {
    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);
        
        int grade1=0, grade2=0, average=0;

        System.out.print("Digite nota 1: ");
        grade1=scan.nextInt();

        System.out.print("Digite nota 2:");
        grade2=scan.nextInt();

        average = (grade1 + grade2)/2;

        System.out.printf("A media entre %d e %d foi %d", grade1,grade2,average);


    }
    
}
