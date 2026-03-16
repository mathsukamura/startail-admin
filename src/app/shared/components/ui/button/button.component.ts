import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipe/safe-html.pipe';

@Component({
  selector: 'app-button',
  imports: [
    CommonModule,
    SafeHtmlPipe,
  ],
  templateUrl: './button.component.html',
  styles: ``,
  host: {

  },
})
export class ButtonComponent {

  @Input() size: 'sm' | 'md' = 'md';
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() disabled = false;
  @Input() className = '';
  @Input() startIcon?: string; // SVG or icon class, or use ng-content for more flexibility
  @Input() endIcon?: string;

  @Output() btnClick = new EventEmitter<Event>();

  get sizeClasses(): string {
    return this.size === 'sm'
      ? 'h-8 px-3 text-sm gap-1.5'
      : 'h-9 px-4 py-2 text-sm';
  }

  get variantClasses(): string {
    return this.variant === 'primary'
      ? 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 disabled:opacity-50'
      : 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground';
  }

  get disabledClasses(): string {
    return this.disabled ? 'cursor-not-allowed opacity-50' : '';
  }

  onClick(event: Event) {
    if (!this.disabled) {
      this.btnClick.emit(event);
    }
  }
}
