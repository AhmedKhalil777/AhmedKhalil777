import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { ViewService } from '../../services/view.service';
import { HeroSection } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  isDarkMode = false;
  heroData$: Observable<HeroSection | null>;
  currentAnimation = 1;
  mouseX = 50;
  mouseY = 50;
  clicks: { x: number, y: number, id: number, timestamp: number }[] = [];
  private clickIdCounter = 0;
  
  // Clock hand animation selector
  isRolling = false;
  rollingAnimation = 1;
  showRollingHand = false;
  handAngle = 0; // Start at 12 o'clock position (0° = top/12 o'clock in CSS rotate)

  // 12 Magnificent Interactive Background Animations
  animations = [
    { id: 1, name: 'Gradient Wave', icon: '🌊', color: '#667eea', interactive: true },
    { id: 2, name: 'Aurora Borealis', icon: '🌌', color: '#00d2ff', interactive: true },
    { id: 3, name: 'Sunset Glow', icon: '🌅', color: '#ff9966', interactive: true },
    { id: 4, name: 'Matrix Rain', icon: '💚', color: '#00ff41', interactive: true },
    { id: 5, name: 'Starfield', icon: '⭐', color: '#ffd700', interactive: true },
    { id: 6, name: 'Plasma Burst', icon: '💥', color: '#ff006e', interactive: true },
    { id: 7, name: 'Ocean Depth', icon: '🌊', color: '#00b4d8', interactive: true },
    { id: 8, name: 'Fire Storm', icon: '🔥', color: '#ff4500', interactive: true },
    { id: 9, name: 'Neon Grid', icon: '📐', color: '#ff00ff', interactive: true },
    { id: 10, name: 'Neural Network', icon: '🧠', color: '#00e5ff', interactive: true },
    { id: 11, name: 'Space Nebula', icon: '🪐', color: '#b794f6', interactive: true },
    { id: 12, name: 'Electric Pulse', icon: '⚡', color: '#ffff00', interactive: true }
  ];

  constructor(
    private themeService: ThemeService,
    private dataService: DataService,
    private viewService: ViewService
  ) {
    this.heroData$ = this.dataService.getHeroSection();
  }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
    
    // Initialize particles.js if available
    if (typeof (window as any).particlesJS !== 'undefined') {
      (window as any).particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
      });
    }

    // Clean up old clicks periodically
    setInterval(() => {
      const now = Date.now();
      this.clicks = this.clicks.filter(click => now - click.timestamp < 2000);
    }, 500);

    // Start random rolling animation after a short delay
    setTimeout(() => {
      this.startRandomRolling();
    }, 1000);
  }

  onImageClick() {
    console.log('Image clicked! isRolling:', this.isRolling);
    
    // Don't allow clicking while already rolling
    if (this.isRolling) {
      console.log('Click ignored - animation already running');
      return;
    }
    
    console.log('Starting new rolling animation...');
    // Start a new rolling animation
    this.startRandomRolling();
  }

  startRandomRolling() {
    this.isRolling = true;
    this.showRollingHand = true;
    this.handAngle = 0; // Start at 12 o'clock (pointing up in CSS)
    
    // Pick a random final position (1-12)
    const finalAnimation = Math.floor(Math.random() * 12) + 1;
    // For CSS rotate: 0° = up (12), 30° = 1, 60° = 2, etc.
    const finalAngle = (finalAnimation - 1) * 30; // Convert to angle (30° per position)
    
    console.log(`🎯 Rolling to animation ${finalAnimation}: ${this.animations[finalAnimation - 1].name}`);
    console.log(`   Hand will point to ${finalAngle}° (CSS rotate)`);
    
    // Add multiple full rotations for effect (3-5 full spins)
    const fullRotations = 3 + Math.floor(Math.random() * 3); // 3 to 5 rotations
    const totalAngle = finalAngle + (fullRotations * 360);
    
    const duration = 3000; // 3 seconds total
    const startTime = Date.now();
    const startAngle = this.handAngle;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for deceleration (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      this.handAngle = startAngle + (totalAngle - startAngle) * eased;
      
      // Update which button we're currently pointing at
      // In CSS rotate: 0° = button 1 (12 o'clock), 30° = button 2, etc.
      const normalizedAngle = (this.handAngle % 360 + 360) % 360;
      this.rollingAnimation = Math.floor(normalizedAngle / 30) + 1;
      if (this.rollingAnimation > 12) this.rollingAnimation = 1;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete
        this.handAngle = finalAngle;
        this.rollingAnimation = finalAnimation;
        this.currentAnimation = finalAnimation;
        this.isRolling = false;
        
        console.log(`✅ Hand landed at ${this.handAngle}° pointing to button ${finalAnimation}`);
        
        // Highlight the selected button briefly
        const selectedButton = document.querySelectorAll('.clock-button')[finalAnimation - 1];
        if (selectedButton) {
          selectedButton.classList.add('selected-by-hand');
        }
        
        // Hide the clock hand after showing selection
        setTimeout(() => {
          this.showRollingHand = false;
          if (selectedButton) {
            selectedButton.classList.remove('selected-by-hand');
          }
        }, 2000);
      }
    };
    
    requestAnimationFrame(animate);
  }

  onMouseMove(event: MouseEvent) {
    const heroElement = (event.target as HTMLElement).closest('.hero');
    if (heroElement) {
      const rect = heroElement.getBoundingClientRect();
      this.mouseX = ((event.clientX - rect.left) / rect.width) * 100;
      this.mouseY = ((event.clientY - rect.top) / rect.height) * 100;
    }
  }

  onBackgroundClick(event: MouseEvent) {
    const heroElement = (event.target as HTMLElement).closest('.hero');
    if (heroElement) {
      const rect = heroElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      
      this.clicks.push({
        x,
        y,
        id: this.clickIdCounter++,
        timestamp: Date.now()
      });
    }
  }

  switchAnimation(animationId: number) {
    this.currentAnimation = animationId;
    console.log(`Switched to animation ${animationId}: ${this.animations[animationId - 1].name}`);
  }

  getClockPosition(index: number): { top: string, left: string } {
    // Mathematical angles: -90° = top (12 o'clock), 0° = right (3 o'clock), etc.
    // index 0 = button 1 = 12 o'clock = -90° math angle
    const angle = (index * 30 - 90) * (Math.PI / 180); // 30 degrees per position, starting from top
    const radius = 180; // pixels from center
    const centerX = 50; // percentage
    const centerY = 50; // percentage
    
    const x = centerX + (radius * Math.cos(angle)) / 3; // Adjust for percentage
    const y = centerY + (radius * Math.sin(angle)) / 3;
    
    return {
      top: `${y}%`,
      left: `${x}%`
    };
  }

  getRandomCode(): string {
    const chars = '01';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  getImagePath(imagePath: string): string {
    return this.dataService.getImagePath(imagePath);
  }

  handleButtonClick(event: Event, link: string) {
    if (link === '#resume') {
      event.preventDefault();
      this.viewService.switchToResume();
    }
    // For other links, let default behavior handle it
  }
}

