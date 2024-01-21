import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialist } from 'src/app/shared/types';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-specialist-page',
  templateUrl: './specialist-page.component.html',
  styleUrls: ['./specialist-page.component.scss'],
})
export class SpecialistPageComponent {
  userId: string | null = null;
  specialist!: Specialist; // Ось тут буде зберігатися інформація про користувача
  specialistsList!: any;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getSpecialist();
  }

  getSpecialist(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log(id);
    this.userService
      .getSpecialist(id)
      .subscribe((specialist) => (this.specialist = specialist));
  }
}
