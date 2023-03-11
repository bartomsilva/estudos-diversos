public class Condicionais {
    public static void main(String[] args) {
        // interessante o if / else e else if idêntico ao JS

        int grade = 59;
        int average = 60;
        int minimum = 50;
        int result = 0;

        if (grade >= average) {
            System.out.printf("O aluno foi aprovado com media %d%n", grade);
        } else if (grade < average && grade >= minimum) {
            System.out.printf("O aluno foi está em recuperacao com media %d%n", grade);
        } else {
            System.out.printf("O aluno foi foi reprovado com media %d%n", grade);
        }
        result = (grade >= average ? 1 : 0);
        System.out.println("O aluno foi " + (result == 1 ? "Aprovado" : "Respovado"));

        /// switch
        int position = 1;

        switch (position) {
            case 1:
                System.out.println("Primeiro Lugar");
                break;
            case 2:
                System.out.println("Segundo Lugar");
                break;
            case 3:
                System.out.println("Terceiro Lugar");
                break;
            default:
                System.out.println("Não subiu no podio");
                break;
        }

    }

}
