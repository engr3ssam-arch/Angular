import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../Service/user-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit{
  
private userService = inject(UserService);

 users = this.userService.usersList;

  ngOnInit() {
    this.userService.getUser().subscribe();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

}
