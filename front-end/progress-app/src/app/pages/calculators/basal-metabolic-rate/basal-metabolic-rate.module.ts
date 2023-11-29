import { NgModule } from "@angular/core";

import { BasalMetabolicRateComponent } from "../basal-metabolic-rate/basal-metabolic-rate.component";
import { BasalMetabolicRateRoutingModule } from "../basal-metabolic-rate/basal-metabolic-rate.routing";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [BasalMetabolicRateRoutingModule, CommonModule, FormsModule],
  declarations: [BasalMetabolicRateComponent]
})
export class BasalMetabolicRateModule {}