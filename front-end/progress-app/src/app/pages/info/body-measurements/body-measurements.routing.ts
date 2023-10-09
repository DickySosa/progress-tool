import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BodyMeasurementsComponent } from "../body-measurements/body-measurements.component";

const routes: Routes = [
  {
    path: "",
    component: BodyMeasurementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyMeasurementsRoutingModule {}