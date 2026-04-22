import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../Service/user-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { NgClass } from '@angular/common';

declare var bootstrap: any;
@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})

export class Users implements OnInit{

private userService = inject(UserService);
  private fb = inject(FormBuilder);

  users = signal<any[]>([]);
  userForm: FormGroup;
  selectedUserId: number | null = null;
  selectedImage = signal<string | null>(null);
  isLoading = signal<boolean>(true);

  constructor() {
  
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      maidenName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      name:[''],
      department:[''],
      jobTitle: [''],
      city: [''], 
     state: [''],
     address: [''],
     postalCode: [''],
    zipCode: [''],
    gender: [''],   
    age: [''],
    title: [''] ,
    university :[''] ,
    username: [''],


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
     username:user.username ,
     maidenName:user.maidenName, 
      email: user.email,
      phone: user.phone,
      title: user.company?.title ,
      name:user.company?.name,
      department:user.company?.department,
      university :user.university ,
      address: user.address?.address,  
     city: user.address?.city,
     state: user.address?.state,
     postalCode: user.address?.postalCode ,
     gender: user.gender, 
     age: user.age
      
    });

    let modalElement = document.getElementById('editUserModal');
    let modal = new bootstrap.Modal(modalElement);
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

 
onAdd() {
  this.selectedUserId = null; 
  this.userForm.reset();  
  let modalElement = document.getElementById('userModal'); 
  if (modalElement) {
   let modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}


saveUser() {
    if (this.userForm.valid) {
      let userData = this.userForm.value;
      
      userData.image = this.selectedImage(); 

      this.userService.addUser(userData).subscribe({
        next: (res) => {
         let newUserWithImage = { ...res, image: userData.image };
          this.users.set([newUserWithImage, ...this.users()]);
          this.selectedImage.set(null); 
       let modalElement = document.getElementById('userModal'); 
       let modal = bootstrap.Modal.getInstance(modalElement); 
        if (modal) {
          modal.hide();
        }
          alert('User Added Successfully');
        }
      });
    }
  }



addUser(data: any) {
  this.userService.addUser(data).subscribe({
    next: (res) => {
      this.users.set([res, ...this.users()]); 
      
      alert('User Added Successfully!');
     
    }
  });
}
onFileSelected(event: any) {
    let file = event.target.files[0];
    if (file) {
    let reader = new FileReader();
      reader.onload = () => {
        this.selectedImage.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }
}
