import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DronePart {
  id: string;
  name: string;
  image: string;
  x: number;
  y: number;
  collected: boolean;
  description: string;
}

@Component({
  selector: 'app-drone-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drone-game.component.html',
  styleUrls: ['./drone-game.component.scss']
})
export class DroneGameComponent implements OnInit, OnDestroy {
  gameActive = false;
  score = 0;
  timeLeft = 30;
  gameInterval?: number;
  countdownInterval?: number;
  
  droneParts: DronePart[] = [
    {
      id: 'frame',
      name: 'Drone Frame',
      image: 'assets/images/drone-parts/drone-frame.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'Carbon fiber frame - the backbone of your FPV drone'
    },
    {
      id: 'camera',
      name: 'FPV Camera',
      image: 'assets/images/drone-parts/fpv-camera.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'Small lightweight camera for first-person view'
    },
    {
      id: 'vtx',
      name: 'Video Transmitter',
      image: 'assets/images/drone-parts/vtx.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'VTX - transmits video signal to your goggles'
    },
    {
      id: 'propellers',
      name: 'Propellers',
      image: 'assets/images/drone-parts/propellers.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'High-performance propellers for agile flight'
    },
    {
      id: 'motors',
      name: 'Brushless Motors',
      image: 'assets/images/drone-parts/motors.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'Powerful brushless motors for FPV racing'
    },
    {
      id: 'nav-antenna',
      name: 'Navigation Antenna',
      image: 'assets/images/drone-parts/nav-antenna.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'GPS antenna for precise navigation and return-to-home'
    },
    {
      id: 'video-antenna',
      name: 'Video Antenna',
      image: 'assets/images/drone-parts/video-antenna.svg',
      x: 0,
      y: 0,
      collected: false,
      description: 'Antenna for transmitting live video feed'
    }
  ];

  ngOnInit() {
    this.resetGame();
  }

  ngOnDestroy() {
    this.stopGame();
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
    // Show final score
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
