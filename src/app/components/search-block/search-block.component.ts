import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],
})
export class SearchBlockComponent {
  usersList: any[] = [];

  private usersListSubscription: Subscription | undefined;

  constructor(private userSerivce: UserService) {}

  ngOnInit(): void {
    this.usersListSubscription = this.userSerivce.getUsers().subscribe(
      (response: any[]) => {
        this.usersList = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.usersListSubscription) {
      this.usersListSubscription.unsubscribe();
    }
  }
}
