import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recieSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Weird ratatuille',
      'gnummy',
      'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066',
      [
        new ingredient('potatoes', 2),
        new ingredient('carrots', 3),
      ]
    ),
    new Recipe(
      'Mess Eggplant',
      '10/10',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [
        new ingredient('eggplant', 3),
        new ingredient('cheese', 2),
      ]
    ),
  ];
  constructor(private shoppingService: ShoppingService){}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: ingredient[]){
this.shoppingService
  }
}
