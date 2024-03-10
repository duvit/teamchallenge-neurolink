import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SettingsComponent {
  role = 'spec';

  expandedIndex: number | undefined;

  expandOrCollapseRow(listIndex: number): void {
    this.expandedIndex =
      this.expandedIndex === listIndex ? undefined : listIndex;
  }

  isExpanded(listIndex: number): boolean {
    return this.expandedIndex === listIndex;
  }
}
