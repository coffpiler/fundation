import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() current: number = 0;
  @Input() total: number = 100;
  @Input() label: string = '';

  get progressPercentage(): number {
    return Math.min((this.current / this.total) * 100, 100);
  }

  get checkpoints(): Array<{value: number, percentage: number}> {
    const checkpointValues = [0, 25, 50, 75, this.total];
    return checkpointValues.map(value => ({
      value,
      percentage: (value / this.total) * 100
    }));
  }
}
