import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BasalMetabolicRateComponent } from "../basal-metabolic-rate/basal-metabolic-rate.component";

const routes: Routes = [
  {
    path: "",
    component: BasalMetabolicRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasalMetabolicRateRoutingModule {}
