import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DroneGameComponent } from './drone-game/drone-game.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DroneGameComponent, TranslatePipe],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  features = [
    {
      icon: '🚀',
      titleKey: 'features.modernArchitecture.title',
      descriptionKey: 'features.modernArchitecture.description'
    },
    {
      icon: '📱',
      titleKey: 'features.responsiveDesign.title',
      descriptionKey: 'features.responsiveDesign.description'
    },
    {
      icon: '⚡',
      titleKey: 'features.highPerformance.title',
      descriptionKey: 'features.highPerformance.description'
    },
    {
      icon: '🔒',
      titleKey: 'features.secure.title',
      descriptionKey: 'features.secure.description'
    },
    {
      icon: '🎨',
      titleKey: 'features.beautifulUI.title',
      descriptionKey: 'features.beautifulUI.description'
    },
    {
      icon: '🛠️',
      titleKey: 'features.developerFriendly.title',
      descriptionKey: 'features.developerFriendly.description'
    }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.init();
  }
}
