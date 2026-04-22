import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../../Service/user-service';

@Component({
  selector: 'app-view-user',
  imports: [RouterLink ],
  templateUrl: './view-user.html',
  styleUrl: './view-user.scss',
})
export class ViewUser implements OnInit {
private route = inject(ActivatedRoute);

  private userService = inject(UserService);
  
  userId: string | null = null;
  userData = signal<any>(null);

  ngOnInit() {
   
    this.userId = this.route.snapshot.paramMap.get('id');
 if (this.userId) {
      this.userService.getUserById(this.userId).subscribe({
        next: (res) => {
          this.userData.set(res);
        }
      });
    }
  }
  
}
