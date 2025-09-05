import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { ProgressBarComponent } from '../../../shared/components/progress-bar/progress-bar.component';
import { PROJECT_STATS } from '../../../shared/config/project-stats.config';

@Component({
  selector: 'app-volunteer-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ProgressBarComponent],
  templateUrl: './volunteer-section.component.html',
  styleUrls: ['./volunteer-section.component.scss']
})
export class VolunteerSectionComponent {
  projectStats = PROJECT_STATS;
}
