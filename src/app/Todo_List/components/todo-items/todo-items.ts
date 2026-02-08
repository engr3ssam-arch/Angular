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
@Component({
  selector: 'app-todo-items',
 imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, NgClass, CommonModule, MatDialogModule],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss',
})
export class TodoItems {
  item = input.required<any>(); 
  isEditDisabled = input<boolean>(false);
  
  onEdit = output<void>();
  onDelete = output<void>();
  onToggle = output<void>();

}
