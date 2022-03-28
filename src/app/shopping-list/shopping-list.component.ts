import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient("flour", 100),
    new ingredient("tomatoes", 10),
    new ingredient("chees", 60)
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(Ingredient: ingredient){
    this.ingredients.push(Ingredient)
  }

}
