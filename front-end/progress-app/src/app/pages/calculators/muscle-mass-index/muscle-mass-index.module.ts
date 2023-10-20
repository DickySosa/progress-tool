import { NgModule } from "@angular/core";


import { MuscleMassIndexComponent } from "./muscle-mass-index.component";
import { MuscleMassIndexRoutingModule } from "./muscle-mass-index.routing";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [MuscleMassIndexRoutingModule, CommonModule],
  declarations: [MuscleMassIndexComponent]
})
export class MuscleMassIndexModule {}