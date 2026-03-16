import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-container',
  imports: [CommonModule],
  template: `
    <div [ngClass]="'overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ' + className">
      <ng-content></ng-content>
    </div>
  `,
})
export class TableContainerComponent {
  @Input() className = '';
}
