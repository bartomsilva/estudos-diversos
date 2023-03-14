import java.util.Arrays;

public class Array {
    public static void main(String[] args){
        final int tam=5;

        int[] num = {0,1,2,3,4};
        int number = 10;
        int[] numbers ={10,222,13,4,50};
        char[] gabarito={'a','b','c','c','a'};

        // for(int x=0; x < num.length; x++){
        //     num[x]=number;
        //     System.out.printf("%d%n",num[x]);
        //     System.out.printf("%d%n",numbers[x]);
        //     number++;
        // }

        // ordenação método
        Arrays.sort(numbers);
        // Arrays.fill(numbers, 10);
        System.arraycopy(numbers, 0, num, 0, 5);
        boolean test = Arrays.equals(num, numbers);

        System.out.println(test);

        // precisa do array ordenado
        int test2 = Arrays.binarySearch(numbers,10);
        System.out.println("oxe "+test2);




        // especial para ler array
        for( int n:num){
            System.out.printf("%d%n",n);
        }
        
    }
    
}
