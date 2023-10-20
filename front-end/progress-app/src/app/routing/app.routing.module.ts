import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full' },

    {
        path: "",
        loadChildren: () => import("../pages/home/home.module").then(m => m.HomeModule)
    },
    {
        path: "body-measurements",
        loadChildren: () =>
            import("../pages/info/body-measurements/body-measurements.module").then(m => m.BodyMeasurementsModule)
    },
    {
        path: "basal-metabolic-rate",
        loadChildren: () =>
            import("../pages/calculators/basal-metabolic-rate/basal-metabolic-rate.module").then(m => m.BasalMetabolicRateModule)
    },
    {
        path: "body-fat-percentage",
        loadChildren: () =>
            import("../pages/calculators/body-fat-percentage/body-fat-percentage.module").then(m => m.BodyFatPercentageModule)
    },
    {
        path: "muscle-mass-index",
        loadChildren: () =>
            import("../pages/calculators/muscle-mass-index/muscle-mass-index.module").then(m => m.MuscleMassIndexModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}