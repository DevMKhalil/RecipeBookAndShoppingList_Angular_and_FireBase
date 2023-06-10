import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from 'src/app/Shared/data-storage.service';
import { Recipe } from "./Recipe.model";
import { RecipeService } from "./RecipeService";

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorage: DataStorageService, private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
      const recipes = this.recipeService.getRecipes();

      if (recipes.length === 0)
        return this.dataStorage.fetchRecipes();
      else
        return recipes;
    }
} 
