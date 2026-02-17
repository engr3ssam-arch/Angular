import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Validators } from '@angular/forms';
import { DataService } from '../../dataServices/data-service';



@Component({
  selector: 'app-login',
  imports: [RouterLink ,ReactiveFormsModule] ,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginForm :FormGroup ;
  constructor(private _router:Router , private authService:DataService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }


 onSubmit() {
    if (this.loginForm.valid) {
     const result = this.authService.login(this.loginForm.value);

      if (result.success) {
        alert(`HELLO :${result.user.firstName}`);
        this._router.navigate(['/todo list']); 
      } else {
        alert('Email or Password are not Exist');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  }
 
    

