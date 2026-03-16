import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

@Component({
  selector: 'app-error-503',
  standalone: true,
  imports: [ErrorPageComponent],
  template: `<app-error-page code="503" title="Website is under maintenance!" description="The site is not available at the moment. <br /> We'll be back online shortly." [showGoBack]="false" [showHome]="false" [showLearnMore]="true" />`,
})
export class Error503Component {}
