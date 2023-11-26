import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menBodyFatGenerator } from 'src/app/helper/bodyFatFunctions';
import { womenBodyFatGenerator } from 'src/app/helper/bodyFatFunctions';

interface Constants {
  WOMEN_CONSTANT: number;
  MEN_CONSTANT: number;
  DIVIDENDO:number;
  RESTA:number;
}

@Component({
  selector: 'app-body-fat-percentage',
  templateUrl: './body-fat-percentage.component.html',
  styleUrls: ['./body-fat-percentage.component.css']
})
export class BodyFatPercentageComponent {

  result!:number;
  selectedGender:string = "hombre";
  hipSize: number | undefined;

  CONSTANTS: Constants = {
    WOMEN_CONSTANT: 1.29579,
    MEN_CONSTANT: 1.0324,
    DIVIDENDO: 495,
    RESTA: 450
  };

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

  calculate(height:string, waist:string,neck:string,hip?:string | undefined){
    const heightValue = parseFloat(height);
    const waistValue = parseFloat(waist);
    const neckValue = parseFloat(neck);
    const hipValue = parseFloat(hip!);

    if(this.selectedGender === 'mujer'){
      this.result = womenBodyFatGenerator(waistValue,hipValue,neckValue, heightValue,this.CONSTANTS.WOMEN_CONSTANT,this.CONSTANTS.DIVIDENDO,this.CONSTANTS.RESTA);
    }else {
      this.result = menBodyFatGenerator(waistValue,neckValue, heightValue,this.CONSTANTS.MEN_CONSTANT,this.CONSTANTS.DIVIDENDO,this.CONSTANTS.RESTA);
    }
  }
}
