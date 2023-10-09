import { NgModule } from "@angular/core";
import { BodyFatPercentageRoutingModule } from "./body-fat-percentage.routing";
import { BodyFatPercentageComponent } from "./body-fat-percentage.component";

@NgModule({
    imports:[BodyFatPercentageRoutingModule],
    declarations:[BodyFatPercentageComponent]
})

export class BodyFatPercentageModule {}