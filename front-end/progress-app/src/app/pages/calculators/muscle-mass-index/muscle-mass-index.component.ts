import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscle-mass-index',
  templateUrl: './muscle-mass-index.component.html',
  styleUrls: ['./muscle-mass-index.component.css']
})
export class MuscleMassIndexComponent {

  constructor(private router: Router){}

  handleNavigation(){
    this.router.navigate(['home'])
  }
}
