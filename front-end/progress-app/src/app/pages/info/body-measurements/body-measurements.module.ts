import { NgModule } from "@angular/core";
import { BodyMeasurementsComponent } from "./body-measurements.component";
import { BodyMeasurementsRoutingModule } from "./body-measurements.routing";

@NgModule({
    imports:[BodyMeasurementsRoutingModule],
    declarations:[BodyMeasurementsComponent]
})

export class BodyMeasurementsModule {}