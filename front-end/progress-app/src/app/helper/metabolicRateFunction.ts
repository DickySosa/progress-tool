export const calculateMetabolicRate = (weigth:number, heigth:number, age:number,selectedGender:string ):number => {
    if (selectedGender === 'hombre') {
        const result:number = (10 * weigth) + (6.25 * heigth) - (5 * age) + 5;
        console.log("result from function helper", result)
        return result
    } else {
        const result:number = (10 * weigth) + (6.25 * heigth) - (5 * age) - 161;
        console.log("result from function helper", result)
        return result
    }
}