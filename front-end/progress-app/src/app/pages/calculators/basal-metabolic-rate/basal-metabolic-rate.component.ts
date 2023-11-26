import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basal-metabolic-rate',
  templateUrl: './basal-metabolic-rate.component.html',
  styleUrls: ['./basal-metabolic-rate.component.css']
})
export class BasalMetabolicRateComponent {

  constructor(private router: Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

  /**
   * (10 x peso de Kg) + (6,25 x altura en cm) – (5 x edad en años) + 5
   */
  // console.log()

}
