import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterService } from '../../services/typewriter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="typewriter-container" *ngIf="isTyping || currentText">
      <div class="typewriter-text">
        <span class="typed-text">{{ currentText }}</span>
        <span class="cursor" [class.blinking]="isTyping">|</span>
      </div>
    </div>
  `,
  styles: [`
    .typewriter-container {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      right: 2rem;
      max-width: 800px;
      margin: 0 auto;
      z-index: 1000;
      pointer-events: none;
    }
    
    .typewriter-text {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 215, 0, 0.3);
      border-radius: 15px;
      padding: 1.5rem 2rem;
      color: #e0e0e0;
      font-size: 1.1rem;
      line-height: 1.6;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      animation: typewriterGlow 2s ease-in-out infinite;
    }
    
    .typed-text {
      color: #f0f0f0;
    }
    
    .cursor {
      color: #ffd700;
      font-weight: bold;
      animation: blink 1s infinite;
    }
    
    .cursor.blinking {
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    @keyframes typewriterGlow {
      0%, 100% {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 215, 0, 0.3);
      }
      50% {
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.1);
        border-color: rgba(255, 215, 0, 0.5);
      }
    }
    
    @media (max-width: 768px) {
      .typewriter-container {
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
      }
      
      .typewriter-text {
        padding: 1rem 1.5rem;
        font-size: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .typewriter-text {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class TypewriterComponent implements OnInit, OnDestroy {
  isTyping = false;
  currentText = '';
  
  private subscriptions: Subscription[] = [];

  constructor(private typewriterService: TypewriterService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.typewriterService.isTyping$.subscribe(typing => {
        this.isTyping = typing;
      }),
      
      this.typewriterService.currentText$.subscribe(text => {
        this.currentText = text;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
