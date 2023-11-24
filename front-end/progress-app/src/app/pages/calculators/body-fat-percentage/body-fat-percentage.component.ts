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
  hipSize: number | undefined;

  constructor(private router:Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

  getGenderClasses() {
    return {
      'show-block': this.selectedGender === 'mujer',
      'hide': this.selectedGender === 'hombre'
    };
  }

  calculate(weight:string, height:string, waist:string,neck:string,hip?:string | undefined){
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    const waistValue = parseFloat(waist);
    const neckValue = parseFloat(neck);
    const hipValue = parseFloat(hip!);

    if(this.selectedGender === 'mujer'){
      
      const cinturaCaderaCuello:number = (waistValue + hipValue) - neckValue
      const logCinturaCaderaCuello:number = 0.35004*Math.log10(cinturaCaderaCuello);
      const logAltura = 0.22100*Math.log10(heightValue);
      console.log(logAltura)
      const divisor:number = 1.29579 - logCinturaCaderaCuello + logAltura
      this.result = (495 / divisor)  - 450;
    }
    const cinturaCuello:number = waistValue - neckValue
    const logCinturaCuello:number = 0.19077*Math.log10(cinturaCuello);
    const logAltura = 0.15456*Math.log10(heightValue);
    console.log(logAltura)
    const divisor:number = 1.0324 - logCinturaCuello + logAltura
    this.result = (495 / divisor)  - 450;


    /*
    % Grasa corporal = (1.20 x IMC) + (0.23 x Edad) – (10.8 x Genero*) – 5.4.
    */
    //set result
    //this.result = grasa;
  }
}
