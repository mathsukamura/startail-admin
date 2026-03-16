
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-text',
  imports: [],
  template: `<div
    class="flex h-10 w-10 items-center justify-center rounded-full 
    {{colorClass}} {{ className }}"
  >
    <span class="text-sm font-medium">{{ initials }}</span>
  </div>`,
})
export class AvatarTextComponent {
  @Input() name!: string;
  @Input() className = '';

  get initials(): string {
    if (!this.name) return '';
    return this.name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  get colorClass(): string {
    const colors = [
      'bg-primary/10 text-primary',
      'bg-muted text-muted-foreground',
      'bg-secondary text-secondary-foreground',
      'bg-accent text-accent-foreground',
      'bg-success-50 text-success-600',
      'bg-warning-50 text-warning-600',
      'bg-error-50 text-error-600',
      'bg-primary/20 text-primary',
    ];
    const index = this.name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  }
}
