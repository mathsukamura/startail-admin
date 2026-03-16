import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-auth-page-layout',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './auth-page-layout.component.html',
  styles: ``
})
export class AuthPageLayoutComponent {
  readonly theme$;

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.theme$;
  }
}
