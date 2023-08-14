import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialist-card',
  templateUrl: './specialist-card.component.html',
  styleUrls: ['./specialist-card.component.scss']
})
export class SpecialistCardComponent {
  @Input() specialist: any;
}
