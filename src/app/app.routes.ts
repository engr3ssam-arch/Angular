import { Routes } from '@angular/router';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from './core/components/not-found/not-found';
import { register } from 'module';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { Invoice } from './Invoice/components/purchase-invoice/purchase-invoice';



export const routes: Routes = [

    { path: 'todo list', component:TodoList ,title:"todo list" },
    { path: 'invoice', component:Invoice ,title:"Purchase Invoice" },
    {path:'login',component:Login ,title:"login"} ,
    { path: 'forget password',component:ForgetPassword ,title:"Forget Password"},
    {path:'register', component:Register ,title:"register"},
    {path: '**' ,component:NotFound ,title:"Not found"},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
   
    

    
  
];
