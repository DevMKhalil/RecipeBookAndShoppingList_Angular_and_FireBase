import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription!: Subscription;
  editMode = false;
  editedIndex!: number;
  editedIngredient!: Ingredient;
  projectForm!: FormGroup;

  constructor(private shoppingListService: ShoppingListService) { }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });

    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.projectForm.setValue({
          Name: this.editedIngredient.name,
          Amount: this.editedIngredient.amount
        });
      });
  }

  onSave() {
    console.log(this.projectForm.value);
    const newIngrediant = new Ingredient(this.projectForm.value.Name, this.projectForm.value.Amount);
    if (this.editMode)
      this.shoppingListService.updateIngredient(this.editedIndex, newIngrediant);
    else
      this.shoppingListService.addIngredient(newIngrediant);
    this.ResetForm();
  }

  ResetForm() {
    this.projectForm.reset();
    this.editMode = false;
  }

  DeleteIngredient() {
    this.shoppingListService.DeleteIngredient(this.editedIndex);
    this.ResetForm();
  }
}
