import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DroneGameComponent } from '../home/drone-game/drone-game.component';
import { VolunteerSectionComponent } from './volunteer-section/volunteer-section.component';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-social-drone',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DroneGameComponent, VolunteerSectionComponent],
  templateUrl: './social-drone.component.html',
  styleUrls: ['./social-drone.component.scss']
})
export class SocialDroneComponent implements OnInit {

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.init();
  }
}
