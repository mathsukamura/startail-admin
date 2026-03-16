import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

@Component({
  selector: 'app-error-500',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page code="500" title="Oops! Something went wrong :&#39;)" description="We apologize for the inconvenience. <br /> Please try again later." />`,
})
export class Error500Component {}
