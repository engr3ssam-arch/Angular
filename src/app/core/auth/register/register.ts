import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { DataService } from '../../services/dataServices/data-service';
@Component({
  selector: 'app-register',
  imports: [ɵInternalFormsSharedModule ,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm!: FormGroup;


  constructor(public authService: DataService ,private _router :Router) { }

  ngOnInit(): void {

  this.registerForm = new FormGroup({
  firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  maidenName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,8}$/)]),
  rePassword: new FormControl(null, [Validators.required]),
  username: new FormControl(null, [Validators.required]) 
}, { validators: this.confirmpassword });
  }

 
   confirmpassword(group:AbstractControl){

   let password =  group.get('password')?.value
   let rePassword = group.get('rePassword')?.value 
   console.log('Pass:', password, 'RePass:', rePassword);
   if (password === rePassword ) {
    return null;
    
   }else{
    return {mismatch:true}
   }
 }



Register() {
  if (this.registerForm.valid) {
    
    const { rePassword, ...userData } = this.registerForm.value;

    this.authService.signUp(userData).subscribe({
      next: (res) => {
        alert('Account Created Successfully!');
        this._router.navigate(['/login']);
      },
      error: (err) => alert('Error creating account')
    });
  }

}
}