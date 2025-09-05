import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneGameComponent } from './drone-game/drone-game.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DroneGameComponent],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  features = [
    {
      icon: '🚀',
      title: 'Modern Architecture',
      description: 'Built with Angular 16+ using standalone components and modern best practices.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Fully responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized for speed with lazy loading, tree shaking, and efficient change detection.'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Built-in security features including authentication guards and HTTP interceptors.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Clean, modern interface with smooth animations and intuitive user experience.'
    },
    {
      icon: '🛠️',
      title: 'Developer Friendly',
      description: 'Well-structured codebase with TypeScript, SCSS, and comprehensive tooling.'
    }
  ];
}
