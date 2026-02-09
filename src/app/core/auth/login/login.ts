import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink] ,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginForm :FormGroup ;
  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
     console.log('Login Data:', this.loginForm.value);
      
      this.router.navigate(['todo list']);
    
  }

}
