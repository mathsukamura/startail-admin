import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

@Component({
  selector: 'app-error-401',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page code="401" title="Unauthorized Access" description="Please log in with the appropriate credentials <br /> to access this resource." />`,
})
export class Error401Component {}
