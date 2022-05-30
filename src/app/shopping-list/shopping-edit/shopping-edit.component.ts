import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm 
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: ingredient
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingService.getIngredients(index)
      }
    )
  }

  onAddItem(form: NgForm){
    const value = form.value
    const newIngredient = new ingredient(value.name, value.amount)
    this.shoppingService.addIngredient(newIngredient)
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }
}
