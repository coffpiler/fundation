import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneGameComponent } from '../home/drone-game/drone-game.component';
import { VolunteerSectionComponent } from './volunteer-section/volunteer-section.component';

@Component({
  selector: 'app-social-drone',
  standalone: true,
  imports: [CommonModule, DroneGameComponent, VolunteerSectionComponent],
  templateUrl: './social-drone.component.html',
  styleUrls: ['./social-drone.component.scss']
})
export class SocialDroneComponent {
}
