import { Routes } from '@angular/router';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from './core/components/not-found/not-found';
import { register } from 'module';



export const routes: Routes = [

    { path: 'todo list', component:TodoList ,title:"todo list" },
    {path: '**' ,component:NotFound ,title:"Not found"},
    { path: '', redirectTo: 'todo list', pathMatch: 'full' }
    

    
  
];
