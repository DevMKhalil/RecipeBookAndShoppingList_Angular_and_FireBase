import { Component, OnInit} from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from "src/app/recipes/RecipeService";
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  loadedRecipe!:Recipe;
  id!: number;

  constructor(private recipeService: RecipeService,
  private route:ActivatedRoute,
private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.loadedRecipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onSendingredientListToShoppingList(){
    this.recipeService.sendingredientList(this.loadedRecipe.ingredientList);
  }

  onEditRecipe(){
    //this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
