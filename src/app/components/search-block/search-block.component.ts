import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user.service';
import { Specialist } from 'src/app/shared/types';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],
})
export class SearchBlockComponent {
  specialistsList!: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.specialistsList = this.userService.getSpecialists().subscribe(
      (data) => (this.specialistsList = data),
      (error) => console.error('Error:', error)
    );
  }

  // usersList: any[] = [];

  // private usersListSubscription: Subscription | undefined;

  // constructor(private userSerivce: UserService) {}

  // ngOnInit(): void {
  //   this.usersListSubscription = this.userSerivce.getUsers().subscribe(
  //     (response: any[]) => {
  //       this.usersList = response;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.usersListSubscription) {
  //     this.usersListSubscription.unsubscribe();
  //   }
  // }
}
