import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyFatPercentageComponent } from "./body-fat-percentage.component";

const routes: Routes = [
    {
     path: "",
     component: BodyFatPercentageComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class BodyFatPercentageRoutingModule {}