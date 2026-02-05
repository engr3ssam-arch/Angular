import { Routes } from '@angular/router';
import { Home } from './features/components/home/home';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from './features/components/not-found/not-found';
import { register } from 'module';
import { Register } from './core/auth/components/register/register';
import { Login } from './core/auth/components/login/login';


export const routes: Routes = [
    {path:"home",component:Home ,title:"Home"},
    {path:"todo list", component:TodoList ,title:"Todo_List"},
   {path:"register" ,component:Register ,title:"Register"} ,
   {path:"login" ,component:Login ,title:"Login"} ,
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:"**" ,component:NotFound ,title:"NOt Found"}
    
  
];
