import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-fat-percentage',
  templateUrl: './body-fat-percentage.component.html',
  styleUrls: ['./body-fat-percentage.component.css']
})
export class BodyFatPercentageComponent {

  constructor(private router:Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }

}
