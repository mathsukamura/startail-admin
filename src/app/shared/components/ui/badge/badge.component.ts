import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipe/safe-html.pipe';

type BadgeVariant = 'light' | 'solid';
type BadgeSize = 'sm' | 'md';
type BadgeColor = 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';

@Component({
  selector: 'app-badge',
  imports: [CommonModule,SafeHtmlPipe],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'light';
  @Input() size: BadgeSize = 'md';
  @Input() color: BadgeColor = 'primary';
  @Input() startIcon?: string; // SVG or HTML string
  @Input() endIcon?: string;   // SVG or HTML string

  @HostBinding('class') get hostClasses(): string {
    return `flex`;
  }

  get baseStyles() {
    return 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 gap-1 font-medium whitespace-nowrap';
  }

  get sizeClass() {
    return {
      sm: 'text-xs',
      md: 'text-xs',
    }[this.size];
  }

  get colorStyles() {
    const variants = {
      light: {
        primary: 'border-transparent bg-primary/10 text-primary',
        success: 'border-transparent bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500',
        error: 'border-transparent bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500',
        warning: 'border-transparent bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400',
        info: 'border-transparent bg-secondary text-secondary-foreground',
        light: 'border-transparent bg-secondary text-secondary-foreground',
        dark: 'border-transparent bg-primary text-primary-foreground',
      },
      solid: {
        primary: 'border-transparent bg-primary text-primary-foreground',
        success: 'border-transparent bg-success-500 text-white',
        error: 'border-transparent bg-destructive text-white',
        warning: 'border-transparent bg-warning-500 text-white',
        info: 'border-transparent bg-secondary text-secondary-foreground',
        light: 'border-transparent bg-secondary text-secondary-foreground',
        dark: 'border-transparent bg-primary text-primary-foreground',
      },
    };
    return variants[this.variant][this.color];
  }
}