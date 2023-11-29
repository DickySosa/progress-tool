import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { calculateMetabolicRate } from 'src/app/helper/metabolicRateFunction';

interface Constants {
  MEN_CONSTANT: Number;
  WOMEN_CONSTANT: Number;
}

@Component({
  selector: 'app-basal-metabolic-rate',
  templateUrl: './basal-metabolic-rate.component.html',
  styleUrls: ['./basal-metabolic-rate.component.css']
})
export class BasalMetabolicRateComponent {

  COSNTANTS: Constants = {
    MEN_CONSTANT: 5,
    WOMEN_CONSTANT: 161
  }

  result!:number;
  selectedGender: string = 'hombre';

  constructor(private router: Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

  calculate(weigth:number, heigth:number, age:number, activityLevel:number,selectedGender:string ){
    console.log(weigth, heigth, age, activityLevel, selectedGender);
    console.log("trying function result from ts component,", calculateMetabolicRate(weigth, heigth, age, selectedGender))
    this.result = calculateMetabolicRate(weigth, heigth, age, selectedGender); 
  }
}
