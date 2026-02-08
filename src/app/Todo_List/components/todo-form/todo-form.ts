
import { Component, inject, model, signal,computed, input, output} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ConfigComponent } from '../../../core/components/config-component/config-component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Todo } from '../../interface/todo';
@Component({
  selector: 'app-todo-form',
 imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, CommonModule, MatDialogModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {
isEditMode = input<boolean>(false);
  
  value = model(''); 


  onAction = output<void>();

  submit() {
    if (this.value().trim()) {
      this.onAction.emit();
    }
  }
  }

   





