import { NgModule } from "@angular/core";


import { MuscleMassIndexComponent } from "./muscle-mass-index.component";
import { MuscleMassIndexRoutingModule } from "./muscle-mass-index.routing";

@NgModule({
  imports: [MuscleMassIndexRoutingModule],
  declarations: [MuscleMassIndexComponent]
})
export class MuscleMassIndexModule {}