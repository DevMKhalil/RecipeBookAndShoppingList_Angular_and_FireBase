import { Ingredient } from '../Shared/Ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredientList!: Ingredient[];

    constructor(name:string,desc:string,imagePath:string,ingredients: Ingredient[])
    {
        this.name= name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredientList = ingredients
    }
}