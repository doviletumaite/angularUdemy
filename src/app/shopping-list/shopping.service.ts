import { ingredient } from "../shared/ingredient.model";

export class ShoppingService {
  private ingredients: ingredient[] = [
    new ingredient("flour", 100),
    new ingredient("tomatoes", 10),
    new ingredient("chees", 60)
  ]
  getIngredients(){
    return this.ingredients.slice()
  }
}
