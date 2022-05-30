import { ingredient } from '../shared/ingredient.model';
import { Subject } from "rxjs"

export class ShoppingService {
  ingredientsChanged = new Subject<ingredient[]>();
  startedEditing  = new Subject<number>();
  private ingredients: ingredient[] = [
    new ingredient('flour', 100),
    new ingredient('tomatoes', 10),
    new ingredient('chees', 60),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
