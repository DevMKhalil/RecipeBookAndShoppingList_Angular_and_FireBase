import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';
import { RecipeService } from "src/app/recipes/RecipeService";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  recipeList: Recipe[] = [];
  recipeSubscription!: Subscription;

  constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) { }
    ngOnDestroy(): void {
      this.recipeSubscription.unsubscribe();
    }

  ngOnInit(): void {
    
    this.recipeSubscription = this.recipeService.recipeChanged.subscribe(
      (result: Recipe[]) => {
        
        this.recipeList = result;
      });

    this.recipeList = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}
