import { NgModule } from "@angular/core";
import { BodyFatPercentageRoutingModule } from "./body-fat-percentage.routing";
import { BodyFatPercentageComponent } from "./body-fat-percentage.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[BodyFatPercentageRoutingModule, CommonModule],
    declarations:[BodyFatPercentageComponent]
})

export class BodyFatPercentageModule {}