import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { ButtonComponent } from "src/app/components/button/button.component";

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HomeComponent, ButtonComponent]
})
export class HomeModule {}