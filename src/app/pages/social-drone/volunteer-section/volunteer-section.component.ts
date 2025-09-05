import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-volunteer-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './volunteer-section.component.html',
  styleUrls: ['./volunteer-section.component.scss']
})
export class VolunteerSectionComponent implements OnInit {

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.init();
  }
}
