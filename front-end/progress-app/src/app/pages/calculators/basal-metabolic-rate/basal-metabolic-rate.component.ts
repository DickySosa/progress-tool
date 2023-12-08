import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { calculateMetabolicRate } from 'src/app/helper/metabolicRateFunction';
import { UserFunction } from 'src/app/helper/functions';
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

  user:UserFunction = UserFunction.getInstance();
  result!:number;
  selectedGender: string = 'hombre';

  constructor(private router: Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

  calculate(weigth:number, heigth:number, age:number, activityLevel:number,selectedGender:string ){
    console.log(weigth, heigth, age, activityLevel, selectedGender);
    this.result = this.user.calculateMetabolicRate(weigth, heigth, age, selectedGender); 
  }
}
