import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

@Component({
  selector: 'app-error-403',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page code="403" title="Access Forbidden" description="You don't have necessary permission <br /> to view this resource." />`,
})
export class Error403Component {}
