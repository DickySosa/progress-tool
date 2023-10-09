import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { BodyMeasurementsComponent } from "../pages/info/body-measurements/body-measurements.component";
import { BasalMetabolicRateComponent } from "../pages/calculators/basal-metabolic-rate/basal-metabolic-rate.component";
import { BodyFatPercentageComponent } from "../pages/calculators/body-fat-percentage/body-fat-percentage.component";
import { MuscleMassIndexComponent } from "../pages/calculators/muscle-mass-index/muscle-mass-index.component";
import { ButtonComponent } from "../components/button/button.component";


const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'body-measurements', component: BodyMeasurementsComponent},
    {path: 'basal-metabolic-rate', component: BasalMetabolicRateComponent},
    {path: 'body-fat-percentage', component: BodyFatPercentageComponent},
    {path: 'muscle-mass-index', component: MuscleMassIndexComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule {}