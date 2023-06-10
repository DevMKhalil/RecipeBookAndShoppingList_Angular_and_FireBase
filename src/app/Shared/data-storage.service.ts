import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { Recipe } from "../Recipes/Recipe.model";
import { RecipeService } from "src/app/recipes/RecipeService";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipebookandshoppinglist-ang-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          alert(err.error.error);
        }
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipebookandshoppinglist-ang-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredientList: recipe.ingredientList ? recipe.ingredientList : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        })
      );
  }
}
