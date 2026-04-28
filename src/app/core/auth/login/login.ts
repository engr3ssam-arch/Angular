import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Validators } from '@angular/forms';
import { DataService } from '../../services/dataServices/data-service';




@Component({
  selector: 'app-login',
  imports: [RouterLink ,ReactiveFormsModule] ,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginForm: FormGroup;

  constructor(private _router: Router, private authService: DataService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]), 
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        alert(`WELCOME : ${res.firstName}`);
        this._router.navigate(['/todo list']);
      },
      error: (err) => {
        alert('Invalid Username or Password');
      }
    });
  } else {
    this.loginForm.markAllAsTouched();
  }
}
 
}

