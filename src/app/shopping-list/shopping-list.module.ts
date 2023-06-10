import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from 'src/app/Shared/shared.module';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    SharedModule
  ]
})
export class ShoppingListModule { }
