import { Component, Input } from '@angular/core';
import type { IconName } from './icon-names';

@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [attr.class]="className"
      [class.fill-current]="fillCurrent"
      aria-hidden="true"
    >
      <use [attr.href]="'/icons/icons.svg#icon-' + name" />
    </svg>
  `,
  styles: `:host { display: inline-flex; align-items: center; justify-content: center; }`,
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size: string | number = '1em';
  @Input() className = '';
  @Input() fillCurrent = false;
}
