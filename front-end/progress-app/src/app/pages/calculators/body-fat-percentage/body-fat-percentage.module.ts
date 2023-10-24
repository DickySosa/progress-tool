import { NgModule } from "@angular/core";
import { BodyFatPercentageRoutingModule } from "./body-fat-percentage.routing";
import { BodyFatPercentageComponent } from "./body-fat-percentage.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[BodyFatPercentageRoutingModule, CommonModule, FormsModule],
    declarations:[BodyFatPercentageComponent]
})

export class BodyFatPercentageModule {}