import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneGameComponent } from '../home/drone-game/drone-game.component';
import { VolunteerSectionComponent } from './volunteer-section/volunteer-section.component';
import { DonationCtaComponent } from '../../shared/components/donation-cta/donation-cta.component';
import { PROJECT_STATS } from '../../shared/config/project-stats.config';

@Component({
  selector: 'app-social-drone',
  standalone: true,
  imports: [CommonModule, DroneGameComponent, VolunteerSectionComponent, DonationCtaComponent],
  templateUrl: './social-drone.component.html',
  styleUrls: ['./social-drone.component.scss']
})
export class SocialDroneComponent {
  projectStats = PROJECT_STATS;
}
