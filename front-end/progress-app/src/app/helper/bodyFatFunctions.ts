export const womenBodyFatGenerator = (
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

export const menBodyFatGenerator = (
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
