import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-base',
  imports: [CommonModule],
  template: `
    <div [ngClass]="containerClasses + ' ' + className">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardBaseComponent {
  @Input() variant: 'default' | 'rounded-2xl' = 'default';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() className = '';

  get containerClasses(): string {
    const base = this.variant === 'rounded-2xl'
      ? 'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'
      : 'rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]';

    const paddingMap: Record<string, string> = {
      none: '',
      sm: 'p-4 sm:p-5',
      md: 'p-5 sm:p-6',
      lg: 'p-5 md:p-6',
    };

    return `${base} ${paddingMap[this.padding]}`;
  }
}
