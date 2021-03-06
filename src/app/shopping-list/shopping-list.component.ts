import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[]
  private igChangeSub: Subscription
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.igChangeSub = this.shoppingService.ingredientsChanged
    .subscribe(
      (ingredients: ingredient[])=>{
        this.ingredients = ingredients
      }
    )
  }

  onEditItem(index: number){
   this.shoppingService.startedEditing.next(index)
  }

ngOnDestroy(): void {
  this.igChangeSub.unsubscribe()
}

}
