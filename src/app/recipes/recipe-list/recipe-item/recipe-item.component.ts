import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../Recipe.model';
import { RecipeService } from "src/app/recipes/RecipeService";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService ) {
  }

  recipeItem!: Recipe;
  @Input() index!: number;

  ngOnInit(): void {
    this.recipeItem = this.recipeService.getRecipe(this.index);
  }

}
