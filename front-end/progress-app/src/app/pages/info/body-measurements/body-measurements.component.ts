import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-measurements',
  templateUrl: './body-measurements.component.html',
  styleUrls: ['./body-measurements.component.css']
})
export class BodyMeasurementsComponent {

  constructor(private router:Router){
    
  }

  handleNavigation (){
    this.router.navigate(['home'])
  }
}
