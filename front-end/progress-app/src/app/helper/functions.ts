export class UserFunction {
    private static instance: UserFunction;
    private constructor() { }

    public static getInstance(): UserFunction {
        if (!UserFunction.instance) {
            UserFunction.instance = new UserFunction();
        }
        return UserFunction.instance;
    }

    public calculateMetabolicRate = (weigth: number, heigth: number, age: number, selectedGender: string): number => {
        if (selectedGender === 'hombre') {
            const result: number = (10 * weigth) + (6.25 * heigth) - (5 * age) + 5;
            return result
        } else {
            const result: number = (10 * weigth) + (6.25 * heigth) - (5 * age) - 161;
            return result
        }
    }

    public bodyFatGenerator = (
        waistValue: number,
        hipValue: number,
        neckValue: number,
        heightValue: number,
        WOMEN_CONSTANT: number,
        MEN_CONSTANT: number,
        DIVIDENDO: number,
        RESTA: number,
        selectedGender: string
    ): number => {
        if (selectedGender === "hombre") {
            const cinturaCuello: number = waistValue - neckValue
            const logCinturaCuello: number = 0.19077 * Math.log10(cinturaCuello);
            const logAltura = 0.15456 * Math.log10(heightValue);
            const divisor: number = MEN_CONSTANT - logCinturaCuello + logAltura
            const result = (DIVIDENDO / divisor) - RESTA;
            return result
        } else {
            const cinturaCaderaCuello: number = (waistValue + hipValue) - neckValue
            const logCinturaCaderaCuello: number = 0.35004 * Math.log10(cinturaCaderaCuello);
            const logAltura = 0.22100 * Math.log10(heightValue);
            const divisor: number = WOMEN_CONSTANT - logCinturaCaderaCuello + logAltura
            const result = (DIVIDENDO / divisor) - RESTA;
            return result
        }
    }

    public womenBodyFatGenerator = (
        waistValue: number,
        hipValue: number,
        neckValue: number,
        heightValue: number,
        WOMEN_CONSTANT: number,
        DIVIDENDO: number,
        RESTA: number
    ): number => {
        const cinturaCaderaCuello: number = (waistValue + hipValue) - neckValue
        const logCinturaCaderaCuello: number = 0.35004 * Math.log10(cinturaCaderaCuello);
        const logAltura = 0.22100 * Math.log10(heightValue);
        const divisor: number = WOMEN_CONSTANT - logCinturaCaderaCuello + logAltura
        const result = (DIVIDENDO / divisor) - RESTA;
        return result;
    }

    public menBodyFatGenerator = (
        waistValue: number,
        neckValue: number,
        heightValue: number,
        MEN_CONSTANT: number,
        DIVIDENDO: number,
        RESTA: number
    ): number => {
        const cinturaCuello: number = waistValue - neckValue
        const logCinturaCuello: number = 0.19077 * Math.log10(cinturaCuello);
        const logAltura = 0.15456 * Math.log10(heightValue);
        const divisor: number = MEN_CONSTANT - logCinturaCuello + logAltura
        const result = (DIVIDENDO / divisor) - RESTA;
        return result;
    }
}