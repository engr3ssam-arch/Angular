import { Routes } from '@angular/router';
import { Home } from './features/components/home/home';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from './features/components/not-found/not-found';


export const routes: Routes = [
    {path:"home",component:Home ,title:"Home"},
    {path:"todo list", component:TodoList ,title:"Todo_List"},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"**" ,component:NotFound ,title:"NOt Found"}
    
  
];
