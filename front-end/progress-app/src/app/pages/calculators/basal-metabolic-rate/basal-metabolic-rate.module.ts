import { NgModule } from "@angular/core";

import { BasalMetabolicRateComponent } from "../basal-metabolic-rate/basal-metabolic-rate.component";
import { BasalMetabolicRateRoutingModule } from "../basal-metabolic-rate/basal-metabolic-rate.routing";

@NgModule({
  imports: [BasalMetabolicRateRoutingModule],
  declarations: [BasalMetabolicRateComponent]
})
export class BasalMetabolicRateModule {}