import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MuscleMassIndexComponent } from "./muscle-mass-index.component";

const routes: Routes = [
  {
    path: "",
    component: MuscleMassIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuscleMassIndexRoutingModule {}
