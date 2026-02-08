import { Component, inject, model, signal,computed} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ConfigComponent } from '../../../core/components/config-component/config-component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Nav } from '../../../shared/components/nav/nav';
import { Footer } from "../../../shared/components/footer/footer";
import { Todo } from '../../interface/todo';
import { TodoSearch } from "../todo-search/todo-search";
import { TodoItems } from '../todo-items/todo-items';
import { TodoForm } from "../todo-form/todo-form";




@Component({
  selector: 'app-todo-list',
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, CommonModule, MatDialogModule, TodoSearch, TodoItems, TodoForm],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
 

  todoList = signal<Todo[]> ([]);
  description= model('');
  searchTerm = signal<string>('');

  readonly dialog =inject (MatDialog);
   selectedIndex :number =-1;

save() {
  if (this.description().trim() === '') return; 

  const newItem :Todo = {
    id: Date.now(), 
    description: this.description(),
    done: false
  };


  this.todoList.update(oldList => [...oldList, newItem]);

 
this.description.set('');
}

checkedChanged(index:number):void{
this.todoList()[index].done =!this.todoList()[index].done;
this.todoList.set(this.todoList());
}

delete(index: number): void {
  this.dialog.open(ConfigComponent, {
    width: '250px'
  }).afterClosed().subscribe((res) => {
    
    if (res === 'yes') {

      this.todoList.update(currentList => 
        currentList.filter((_, i) => i !== index)
      );
      
      console.log('deleted');
    }
  });
}



editItem(index: number, item: Todo): void {
  this.selectedIndex = index;
  this.description.set(item.description); 
}


update() {
  if (this.selectedIndex >= 0) {
    this.todoList.update(list => {
      const newList = [...list]; 
      newList[this.selectedIndex] = { 
        ...newList[this.selectedIndex], 
        description: this.description() 
      };
      return newList;
    });

   
    this.description.set('');
    this.selectedIndex = -1;
  }
}

filteredTodoList = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.todoList().filter(item => 
      item.description.toLowerCase().includes(term)
    );
  });

  onSearch(value: string) {
  this.searchTerm.set(value); 
}
}
