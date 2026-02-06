import { Component, inject, model, signal, Signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ConfigComponent } from '../config-component/config-component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Nav } from '../../../shared/components/nav/nav';
import { Footer } from "../../../shared/components/footer/footer";


interface Todo{
  id:number;
  description:string;
  done:boolean;

}

@Component({
  selector: 'app-todo-list',
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, NgClass, CommonModule, MatDialogModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todoList = signal<Todo[]> ([]);
  description= model('');
  

  readonly dialog =inject (MatDialog);
   selectedIndex :number =-1;

save():void{
  let obj :Todo={
    description:this.description(),
    done:false,
    id:this.todoList().length +1
  };
  this.todoList().push(obj);
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
}
