import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recieSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('test recepie 1', 'test', 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066'),
    new Recipe( 'test recepie 2', 'test', 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg')
  ]
  getRecipes(){
    return this.recipes.slice()
  }
}
