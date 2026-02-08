import { Component, inject, model, signal,computed, output} from '@angular/core';
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
  selector: 'app-todo-search',
   imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, CommonModule, MatDialogModule],
  templateUrl: './todo-search.html',
  styleUrl: './todo-search.scss',
})
export class TodoSearch {
  
    todoList = signal<Todo[]> ([]);
    description= model('');
    searchTerm = signal<string>('');
    filteredTodoList = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.todoList().filter(item => 
      item.description.toLowerCase().includes(term)
    );
  });

 searchChange = output<string>(); 


onInput(event: Event) {
  const val = (event.target as HTMLInputElement).value;
  this.searchChange.emit(val);
}
}
