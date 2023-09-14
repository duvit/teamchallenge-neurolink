import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialist } from 'src/app/shared/types';

@Component({
  selector: 'app-specialist-page',
  templateUrl: './specialist-page.component.html',
  styleUrls: ['./specialist-page.component.scss'],
})
export class SpecialistPageComponent {
  id!: number;
  specialist!: Specialist;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.specialist = this.userService.getSpecialistById(this.id);
  }
}
