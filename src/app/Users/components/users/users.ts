import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../Service/user-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})

export class Users implements OnInit{

private userService = inject(UserService);
  private fb = inject(FormBuilder);

  users = signal<any[]>([]);
  userForm: FormGroup;
  selectedUserId: number | null = null;

  isLoading = signal<boolean>(true);
  
  constructor() {
  
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      jobTitle: [''] ,
      city: [''], 
    state: [''],
    streetAdd: [''],
    zipCode: ['']
    });
  }

  
 ngOnInit() {
  this.isLoading.set(true); 
  this.userService.getUser().subscribe({
    next: (res: any) => {
      this.users.set(res.users);
      this.isLoading.set(false); 
    }
    });
}



  onEdit(user: any) {
    this.selectedUserId = user.id!;
    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      jobTitle: user.jobTitle ,
      city:user.city ,
      state:user.state ,
      streetAdd:user.streetAdd ,
      zipCode:user.zipCode
    });

    const modalElement = document.getElementById('editUserModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  UpdateUser() {
    if (this.userForm.valid && this.selectedUserId) {
      this.userService.updateExistingUser(this.selectedUserId, this.userForm.value).subscribe({
       next: (updatedUser: any) => {
          this.users.update(current => 
            current.map(u => u.id === this.selectedUserId ? updatedUser : u)
          );
          alert('Saved');
          const modalElement = document.getElementById('editUserModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      });
    }
  }

deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users.update(current => current.filter(u => u.id !== id));
      }
    });
  }


}
