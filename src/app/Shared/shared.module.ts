import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { SpinnerFirstComponent } from "./Spinners/spinnerfirst/spinner-first.component";
import { SpinnerSecondComponent } from "./Spinners/spinnerSecond/spinner-second.component";

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerFirstComponent,
    SpinnerSecondComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    SpinnerFirstComponent,
    SpinnerSecondComponent,
    DropdownDirective,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
