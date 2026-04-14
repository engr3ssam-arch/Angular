import { Component, inject } from '@angular/core';
import { HttpclientService } from '../../../core/services/httpclient-service/httpclient-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
private userService = inject(HttpclientService);

users = this.userService.usersList; 

//Get all User 
ngOnInit() {
  this.userService.getUsers().subscribe(); 
}


//Delete user
deleteUser(id: number) {
  this.userService.deleteUser(id).subscribe();
}

}
