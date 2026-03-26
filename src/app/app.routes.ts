import { Routes } from '@angular/router';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from './core/components/not-found/not-found';
import { register } from 'module';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { Invoice } from './Invoice/components/purchase-invoice/purchase-invoice';
import { PurchaseStepper } from './Purchase/components/purchase-stepper/purchase-stepper';
import { ChooseDial } from './Purchase/components/choose-dial/choose-dial';
import { CustomerInfo } from './Purchase/components/customer-info/customer-info';
import { ChoosePlan } from './Purchase/components/choose-plan/choose-plan';
import { ChooseBundle } from './Purchase/components/choose-bundle/choose-bundle';
import { PurshaseMain } from './Purchase/components/purshase-main/purshase-main';



export const routes: Routes = [

    { path: 'todo list', component:TodoList ,title:"todo list" },
    { path: 'invoice', component:Invoice ,title:"Purchase Invoice" },
    { path: 'purchase-main/:type', component:PurshaseMain },
    { path: 'purchase/:type', component: PurchaseStepper },
    { path: 'choose dial', component: ChooseDial },
    { path: 'customer info', component:CustomerInfo },
    { path: 'choose plan', component:ChoosePlan },
    { path: 'choose bundle', component:ChooseBundle },
    {path:'login',component:Login ,title:"login"} ,
    { path: 'forget password',component:ForgetPassword ,title:"Forget Password"},
    {path:'register', component:Register ,title:"register"},
    {path: '**' ,component:NotFound ,title:"Not found"},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
   
    

    
  
];
