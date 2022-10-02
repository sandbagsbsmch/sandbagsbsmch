import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Hello! please enter your age");
        int age = myScanner.nextInt();

        while(age >= 0) {
            if (age > 20) {
                System.out.println("Please enter triangle width");
                int width = myScanner.nextInt();
                System.out.println("Please enter triangle length");
                int length = myScanner.nextInt();

                int hypotenuse = (width * width) + (length * length);
                System.out.println("The hypotenuse is " + hypotenuse);
            } else if (age < 20) {
                System.out.println("please enter circle radius : ");
                int radius = myScanner.nextInt();

                double circleArea = 3.14 * (radius * radius);
                System.out.println("The area of the circle : " + circleArea);
            }

            System.out.println("Hello! please enter your age");
            age = myScanner.nextInt();
        }

        System.out.println("Bye Bye!");
    }
}