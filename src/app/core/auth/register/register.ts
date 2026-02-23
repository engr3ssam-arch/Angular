import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { User } from '../../../shared/interface/user';
import { DataService } from '../../dataServices/data-service';
@Component({
  selector: 'app-register',
  imports: [ɵInternalFormsSharedModule ,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm!: FormGroup;


  constructor(private _authService: DataService ,private _router :Router) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,8}$/)]),
      rePassword: new FormControl(null, [Validators.required ,Validators.pattern(/^[0-9]{4,8}$/)]),
      description: new FormControl(null)
    },  {validators:this.confirmpassword} );


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
     if(this.registerForm.valid){
     const userObj:User = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      rePassword: this.registerForm.value.rePassword,
      description: this.registerForm.value.description
    };

    console.log('User Object:', userObj);
    this._authService.registerUser(userObj);
     this._router.navigate(['/login']); 
  } else {
    this.registerForm.markAllAsTouched();
  }
}
  

}
