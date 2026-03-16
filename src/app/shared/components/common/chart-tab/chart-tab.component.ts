
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TabOption = 'optionOne' | 'optionTwo' | 'optionThree';

@Component({
  selector: 'app-chart-tab',
  imports: [CommonModule],
  templateUrl: './chart-tab.component.html'
})
export class ChartTabComponent {
  selected: TabOption = 'optionOne';

  setSelected(option: TabOption) {
    this.selected = option;
  }

  getButtonClass(option: TabOption): string {
    return this.selected === option
      ? 'bg-background text-foreground shadow-xs'
      : '';
  }
}