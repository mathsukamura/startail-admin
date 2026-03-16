import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page code="404" title="Oops! Page Not Found!" description="It seems like the page you're looking for <br /> does not exist or might have been removed." />`,
})
export class Error404Component {}
