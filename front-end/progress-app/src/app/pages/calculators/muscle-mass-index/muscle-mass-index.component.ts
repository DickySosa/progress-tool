import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-muscle-mass-index',
  templateUrl: './muscle-mass-index.component.html',
  styleUrls: ['./muscle-mass-index.component.css']
})
export class MuscleMassIndexComponent {

  result!:string;

  constructor(private router: Router) { }

  handleNavigation() {
    this.router.navigate(['home'])
  }

  calculateImc(weight:number, height:number) {
    console.log(`Weight: ${weight}, Height: ${height}`)
    let x:number = weight/(height ** 2);
    let imc:string = x.toFixed(1);
    this.result = imc;
  }
}
