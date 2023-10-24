import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-fat-percentage',
  templateUrl: './body-fat-percentage.component.html',
  styleUrls: ['./body-fat-percentage.component.css']
})
export class BodyFatPercentageComponent {

  result!:number;
  selectedGender:string = "hombre";


  constructor(private router:Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

  calculate(weight:string, height:string, waist:string,neck:string,hip?:string | undefined){
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const waistValue = parseFloat(waist);
    const neckValue = parseFloat(neck);
    const hipValue = parseFloat(hip!);
    console.log(weightValue,heightValue,neckValue,waistValue,hipValue)

    
    
    
    if (hipValue) {
      // Women
      let hipWaistNeck: number = waistValue + hipValue - neckValue;
      let logHipNeckWaist: number = Math.log(hipWaistNeck);
      let a: number = 1.29579 - 0.35004 * logHipNeckWaist;
      let b: number = 0.22100 * Math.log(heightValue);
      let womenBodyFat: number = (495 / (a + b)) - 450;
      this.result = womenBodyFat;
      console.log('log women', logHipNeckWaist);
      console.log('contains hip');
    } else {
      // Men
      let neckWaist: number = waistValue - neckValue;
      let logNeckWaist: number = Math.log(neckWaist);
      let a: number = 1.0324 - 0.19077 * logNeckWaist;
      let b: number = 0.15456 * Math.log(heightValue);
      let menBodyFat: number = (495 / (a + b)) - 450;
      this.result = menBodyFat;
      console.log('log men', logNeckWaist);
      console.log('not contains hip');
    }

    let imc:number = 70.6/(1.83 ** 2)
    console.log("IMC-->", imc)

    let grasa:number = (1.20*imc)+(0.23*20)-(10.8*1)-5.4

    console.log('Porcentaje de grasa ---->', grasa)
  }

}
