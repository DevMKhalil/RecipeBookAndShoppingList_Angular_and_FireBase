import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  constructor() { }

  private ingredientList: Ingredient[] = [
    new Ingredient("ingredient 1",15),
    new Ingredient("ingredient 2",20),
    new Ingredient("Ingredient 3",25)
  ];

  getIngredients(){
    return this.ingredientList.slice();
  }

  addIngredient(Ingredient: Ingredient){
    this.ingredientList.push(Ingredient);
    this.ingredientChanged.next(this.ingredientList.slice()); 
  }

  addIngredientsToShopingList(ingredientList: Ingredient[]){
    this.ingredientList.push(...ingredientList);
    this.ingredientChanged.next(this.ingredientList.slice()); 
  }

  getIngredient(index: number) {
    return this.ingredientList[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredientList[index] = ingredient;
    this.ingredientChanged.next(this.ingredientList.slice());
  }

  DeleteIngredient(index: number) {
    this.ingredientList.splice(index, 1);
    this.ingredientChanged.next(this.ingredientList.slice());
  }
}
