import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
  constructor(private router:Router) {}

  onReset() {
  
    alert('Reset link has been sent to your email!');
    
   
    this.router.navigate(['/login']);
  }

}
