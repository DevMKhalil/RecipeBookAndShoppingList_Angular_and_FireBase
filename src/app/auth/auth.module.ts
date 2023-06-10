import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }])
  ]
})
export class AuthModule { }
