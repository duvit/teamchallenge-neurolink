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

  selectedCategories: string[] = [];
  selectedLocation: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.specialistsList = this.userService.getSpecialists().subscribe(
      (data) => (this.specialistsList = data),
      (error) => console.error('Error:', error)
    );
  }

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      // Видаляємо категорію, якщо вона вже була обрана
      this.selectedCategories = this.selectedCategories.filter(
        (item) => item !== category
      );
      this.userService.getSpecialists();
      this.applyFilter();
    } else {
      // Додаємо категорію, якщо вона не була обрана
      this.selectedCategories.push(category);
      this.applyFilter();
    }
  }

  toggleCity(city: string) {
    if (this.selectedLocation === city) {
      // Видаляємо категорію, якщо вона вже була обрана
      this.selectedLocation = '';
      this.userService.getSpecialists();
      this.applyFilter();
    } else {
      // Додаємо категорію, якщо вона не була обрана
      this.selectedLocation = city;
      this.applyFilter();
    }
  }

  filterItems(filterParams: any) {
    this.userService.getFilteredItems(filterParams).subscribe((items) => {
      this.specialistsList = items;
    });
  }

  applyFilter() {
    const filterParams = {
      categories: this.selectedCategories,
      location: this.selectedLocation,
    };
    console.log(filterParams.categories);
    console.log(filterParams.location);

    return this.filterItems(filterParams);
  }

  // ngOnDestroy(): void {
  //   if (this.usersListSubscription) {
  //     this.usersListSubscription.unsubscribe();
  //   }
  // }
}
