import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { TranslationService } from '../../../shared/services/translation.service';
import { DronePart, DRONE_PARTS } from './drone-parts.data';

@Component({
  selector: 'app-drone-game',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './drone-game.component.html',
  styleUrls: ['./drone-game.component.scss']
})
export class DroneGameComponent implements OnInit, OnDestroy {
  gameActive = false;
  gameExpanded = false;
  score = 0;
  bestScore = 0;
  timeLeft = 30;
  gameInterval?: number;
  countdownInterval?: number;
  private readonly BEST_SCORE_KEY = 'drone-game-best-score';
  
  droneParts: DronePart[] = [...DRONE_PARTS];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.loadBestScore();
    this.resetGame();
  }

  toggleGameExpansion(): void {
    this.gameExpanded = !this.gameExpanded;
    if (!this.gameExpanded) {
      this.stopGame();
    }
  }

  ngOnDestroy() {
    this.stopGame();
  }

  startOver() {
    this.stopGame();
    this.resetGame();
  }

  startGame() {
    this.gameActive = true;
    this.score = 0;
    this.timeLeft = 30;
    this.resetParts();
    this.spawnParts();
    
    this.countdownInterval = window.setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);

    this.gameInterval = window.setInterval(() => {
      this.moveParts();
    }, 100);
  }

  stopGame() {
    this.gameActive = false;
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  endGame() {
    this.stopGame();
    this.updateBestScore();
  }

  private loadBestScore(): void {
    const saved = localStorage.getItem(this.BEST_SCORE_KEY);
    this.bestScore = saved ? parseInt(saved, 10) : 0;
  }

  private saveBestScore(): void {
    localStorage.setItem(this.BEST_SCORE_KEY, this.bestScore.toString());
  }

  private updateBestScore(): void {
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      this.saveBestScore();
    }
  }

  resetGame() {
    this.stopGame();
    this.score = 0;
    this.timeLeft = 30;
    this.resetParts();
  }

  resetParts() {
    this.droneParts.forEach(part => {
      part.collected = false;
      part.x = Math.random() * 80; // Keep within game area
      part.y = Math.random() * 60;
    });
  }

  spawnParts() {
    this.droneParts.forEach((part, index) => {
      setTimeout(() => {
        if (this.gameActive) {
          part.x = Math.random() * 80;
          part.y = Math.random() * 60;
        }
      }, index * 2000); // Spawn parts every 2 seconds
    });
  }

  moveParts() {
    this.droneParts.forEach(part => {
      if (!part.collected) {
        // Simple floating animation
        part.x += (Math.random() - 0.5) * 2;
        part.y += (Math.random() - 0.5) * 2;
        
        // Keep parts within bounds
        part.x = Math.max(0, Math.min(80, part.x));
        part.y = Math.max(0, Math.min(60, part.y));
      }
    });
  }

  collectPart(part: DronePart) {
    if (!part.collected && this.gameActive) {
      part.collected = true;
      this.score += 10;
      
      // Respawn part after 3 seconds
      setTimeout(() => {
        if (this.gameActive) {
          part.collected = false;
          part.x = Math.random() * 80;
          part.y = Math.random() * 60;
        }
      }, 3000);
    }
  }

  getGameAreaStyle() {
    return {
      'position': 'relative',
      'width': '100%',
      'height': '400px',
      'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'border-radius': '12px',
      'overflow': 'hidden'
    };
  }

  getPartStyle(part: DronePart) {
    return {
      'position': 'absolute',
      'left': part.x + '%',
      'top': part.y + '%',
      'transform': 'translate(-50%, -50%)',
      'opacity': part.collected ? '0' : '1',
      'transition': 'opacity 0.3s ease'
    };
  }
}
