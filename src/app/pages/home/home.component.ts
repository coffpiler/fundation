import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.init();
  }
}
