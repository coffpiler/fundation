import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-donation-cta',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './donation-cta.component.html',
  styleUrls: ['./donation-cta.component.scss']
})
export class DonationCtaComponent {
  @Input() donationLink: string = '';
  @Input() customText: string = '';
}
