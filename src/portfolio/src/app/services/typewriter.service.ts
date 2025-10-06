import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TypewriterText {
  id: string;
  text: string;
  speed: number; // words per minute
  element?: HTMLElement;
}

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {
  private isTyping = new BehaviorSubject<boolean>(false);
  public isTyping$ = this.isTyping.asObservable();
  
  private currentText = new BehaviorSubject<string>('');
  public currentText$ = this.currentText.asObservable();
  
  private typewriterTexts: TypewriterText[] = [
    { 
      id: 'home', 
      text: "Hi, I'm Ahmed Khalil. A passionate Senior .NET Engineer with over 7 years of experience building scalable applications.", 
      speed: 400 
    },
    { 
      id: 'about', 
      text: "I graduated with honors from Mansoura University and currently work at Integrant Inc. I specialize in .NET Core, Angular, and Azure Cloud services.", 
      speed: 380 
    },
    { 
      id: 'skills', 
      text: "My expertise spans across C#, TypeScript, Angular, .NET Core, Azure, microservices architecture, and modern web technologies.", 
      speed: 360 
    },
    { 
      id: 'projects', 
      text: "I've built enterprise-level solutions, e-commerce platforms, and cloud-based applications that serve thousands of users.", 
      speed: 370 
    },
    { 
      id: 'experience', 
      text: "With 5+ years of experience, I've led development teams, architected scalable solutions, and delivered projects on time and within budget.", 
      speed: 375 
    },
    { 
      id: 'contact', 
      text: "I'm always interested in new opportunities and exciting projects. Let's connect and build something amazing together!", 
      speed: 390 
    }
  ];

  private currentIndex = 0;
  private typingInterval: any;

  constructor() { }

  startTypewriter(sectionId: string) {
    const textData = this.typewriterTexts.find(t => t.id === sectionId);
    if (!textData) return;

    this.isTyping.next(true);
    this.currentText.next('');
    
    const words = textData.text.split(' ');
    let currentWordIndex = 0;
    
    // Calculate delay based on reading speed (words per minute)
    // Reduced delay for faster typing to match scene duration
    const delay = (60 / textData.speed) * 1000 * 0.7; // 30% faster typing
    
    this.typingInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        const currentText = words.slice(0, currentWordIndex + 1).join(' ');
        this.currentText.next(currentText);
        currentWordIndex++;
      } else {
        this.isTyping.next(false);
        clearInterval(this.typingInterval);
      }
    }, delay);
  }

  stopTypewriter() {
    this.isTyping.next(false);
    this.currentText.next('');
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  getTypewriterTexts(): TypewriterText[] {
    return this.typewriterTexts;
  }

  getTextForSection(sectionId: string): string {
    const textData = this.typewriterTexts.find(t => t.id === sectionId);
    return textData ? textData.text : '';
  }
}
