import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ngOnDestroy(): void {
    this.subIngredientChanged.unsubscribe();
  }

  ingredientList: Ingredient[] = [];
  private subIngredientChanged! : Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientList = this.shoppingListService.getIngredients();
    this.subIngredientChanged = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredientList = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }
}
