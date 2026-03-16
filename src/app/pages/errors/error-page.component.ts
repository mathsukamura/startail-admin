import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="h-svh">
      <div class="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 class="text-[7rem] leading-tight font-bold">{{ code }}</h1>
        <span class="font-medium">{{ title }}</span>
        <p class="text-center text-muted-foreground" [innerHTML]="description"></p>
        <div class="mt-6 flex gap-4">
          @if (showGoBack) {
            <button
              (click)="goBack()"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Go Back
            </button>
          }
          @if (showHome) {
            <a
              routerLink="/"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
            >
              Back to Home
            </a>
          }
          @if (showLearnMore) {
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Learn more
            </button>
          }
        </div>
      </div>
    </div>
  `,
})
export class ErrorPageComponent {
  @Input() code = '404';
  @Input() title = 'Page Not Found';
  @Input() description = '';
  @Input() showGoBack = true;
  @Input() showHome = true;
  @Input() showLearnMore = false;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
