package FinancialForecasting;

public class FinancialForecasting {

    public static double predictValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }

        return predictValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.08;
        int years = 5;

        double futureValue = predictValue(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n",
                years, futureValue);
    }
}