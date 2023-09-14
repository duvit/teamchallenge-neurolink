import { Component, Input } from '@angular/core';

import { Specialist } from 'src/app/shared/types';

@Component({
  selector: 'app-specialist-card',
  templateUrl: './specialist-card.component.html',
  styleUrls: ['./specialist-card.component.scss'],
})
export class SpecialistCardComponent {
  @Input() specialist!: Specialist;
}
