import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypewriterService } from './typewriter.service';

export interface MovieScene {
  id: string;
  title: string;
  duration: number; // in milliseconds
  scrollPosition: number;
  element?: HTMLElement;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnDestroy {
  private isMovieMode = new BehaviorSubject<boolean>(false);
  public isMovieMode$ = this.isMovieMode.asObservable();
  
  private currentScene = new BehaviorSubject<number>(0);
  public currentScene$ = this.currentScene.asObservable();
  
  private movieScenes: MovieScene[] = [
    { id: 'home', title: 'The Introduction', duration: 8000, scrollPosition: 0 },
    { id: 'about', title: 'The Story', duration: 10000, scrollPosition: 100 },
    { id: 'skills', title: 'The Expertise', duration: 12000, scrollPosition: 200 },
    { id: 'projects', title: 'The Journey', duration: 10000, scrollPosition: 300 },
    { id: 'experience', title: 'The Experience', duration: 10000, scrollPosition: 400 },
    { id: 'contact', title: 'The Connection', duration: 8000, scrollPosition: 500 }
  ];

  private scrollInterval: any;
  private currentIndex = 0;
  private totalDuration = 0;
  private isScrolling = false;
  private scrollTimeout: any;
  private isUserScrolling = false;
  private isProgrammaticScroll = false;
  private scrollListener: ((e: Event) => void) | undefined;
  private clickListener: ((e: Event) => void) | undefined;
  private keyListener: ((e: KeyboardEvent) => void) | undefined;
  private touchListener: ((e: Event) => void) | undefined;
  private wheelListener: ((e: Event) => void) | undefined;
  private interactionTimeout: any;
  private hasInteracted = false;

  constructor(private typewriterService: TypewriterService) {
    this.calculateTotalDuration();
    this.setupUserInteractionListeners();
  }

  private calculateTotalDuration() {
    this.totalDuration = this.movieScenes.reduce((total, scene) => total + scene.duration, 0);
  }

  private setupUserInteractionListeners() {
    // Listen for ANY user interaction to stop movie mode
    
    // Scroll detection
    this.scrollListener = () => {
      if (this.isMovieMode.value && !this.isProgrammaticScroll) {
        this.handleUserInteraction('scroll');
      }
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    
    // Click detection
    this.clickListener = (e: Event) => {
      if (this.isMovieMode.value) {
        // Allow clicks on movie toggle button
        const target = e.target as HTMLElement;
        if (!target.closest('.movie-toggle')) {
          this.handleUserInteraction('click');
        }
      }
    };
    document.addEventListener('click', this.clickListener, { passive: true });
    
    // Keyboard detection
    this.keyListener = (e: KeyboardEvent) => {
      if (this.isMovieMode.value) {
        // Stop on any meaningful key press
        if (!['Control', 'Alt', 'Shift', 'Meta', 'CapsLock'].includes(e.key)) {
          this.handleUserInteraction('keyboard');
        }
      }
    };
    document.addEventListener('keydown', this.keyListener, { passive: true });
    
    // Touch detection
    this.touchListener = () => {
      if (this.isMovieMode.value) {
        this.handleUserInteraction('touch');
      }
    };
    document.addEventListener('touchstart', this.touchListener, { passive: true });
    
    // Mouse wheel detection
    this.wheelListener = () => {
      if (this.isMovieMode.value) {
        this.handleUserInteraction('wheel');
      }
    };
    document.addEventListener('wheel', this.wheelListener, { passive: true });

    // Listen for view changes (navigation)
    window.addEventListener('switch-to-resume', () => {
      if (this.isMovieMode.value) {
        this.handleUserInteraction('navigation');
      }
    });

    window.addEventListener('switch-to-hero', () => {
      if (this.isMovieMode.value) {
        this.handleUserInteraction('navigation');
      }
    });
  }

  private handleUserInteraction(type: string) {
    // Mark that user has interacted
    this.hasInteracted = true;
    this.isUserScrolling = true;
    
    console.log(`Movie stopped due to user interaction: ${type}`);
    
    // Stop the movie and typewriter immediately
    this.stopMovie();
    this.typewriterService.stopTypewriter();
    
    // Clear any pending timeouts
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.interactionTimeout) {
      clearTimeout(this.interactionTimeout);
    }
    
    // Reset flags after a delay
    this.interactionTimeout = setTimeout(() => {
      this.isUserScrolling = false;
      this.hasInteracted = false;
    }, 2000);
  }

  startMovie() {
    if (this.isMovieMode.value) return;
    
    // Reset all interaction flags
    this.isUserScrolling = false;
    this.hasInteracted = false;
    this.isProgrammaticScroll = false;
    
    // Add movie mode class to body
    document.body.classList.add('movie-mode');
    
    // Force trigger auto-scroll animations
    setTimeout(() => {
      const autoScrollElements = document.querySelectorAll('.auto-scroll-content');
      autoScrollElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        // Force restart animation
        htmlElement.style.animation = 'none';
        htmlElement.offsetHeight; // Trigger reflow
        htmlElement.style.animation = '';
      });
    }, 100);
    
    this.isMovieMode.next(true);
    this.currentIndex = 0;
    this.playNextScene();
  }

  stopMovie() {
    this.isMovieMode.next(false);
    this.currentIndex = 0;
    this.currentScene.next(0);
    document.body.classList.remove('movie-mode');
    
    // Clear all intervals and timeouts
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Stop typewriter as well
    this.typewriterService.stopTypewriter();
  }

  private playNextScene() {
    if (this.currentIndex >= this.movieScenes.length) {
      this.restartMovie();
      return;
    }

    // Check if user has interacted - if so, don't proceed
    if (this.isUserScrolling || this.hasInteracted) {
      return;
    }

    const scene = this.movieScenes[this.currentIndex];
    this.currentScene.next(this.currentIndex);
    
    // Stop previous typewriter if any
    this.typewriterService.stopTypewriter();
    
    // Start typewriter for current scene
    setTimeout(() => {
      if (!this.hasInteracted) {
        this.typewriterService.startTypewriter(scene.id);
      }
    }, 500); // Small delay to ensure smooth transition
    
    // Cinematic scroll to scene
    this.cinematicScrollToScene(scene);
    
    // Wait for scene duration, then move to next
    setTimeout(() => {
      if (this.isMovieMode.value && !this.isUserScrolling && !this.hasInteracted) {
        this.currentIndex++;
        this.playNextScene();
      }
    }, scene.duration);
  }

  private cinematicScrollToScene(scene: MovieScene) {
    const element = document.getElementById(scene.id);
    if (element) {
      // Mark as programmatic scroll to prevent interference
      this.isProgrammaticScroll = true;
      
      // Add cinematic fade effect
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.style.opacity = '0.8';
      
      // Smooth cinematic scroll
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Restore opacity after scroll
      setTimeout(() => {
        document.body.style.opacity = '1';
        // Reset programmatic scroll flag after scroll completes
        setTimeout(() => {
          this.isProgrammaticScroll = false;
        }, 1000); // Give extra time for scroll to complete
      }, 500);
      
      // Add scene-specific cinematic effects
      this.addCinematicEffects(scene);
    }
  }

  private addCinematicEffects(scene: MovieScene) {
    const element = document.getElementById(scene.id);
    if (element && !this.hasInteracted) {
      // Add cinematic glow effect
      element.style.animation = 'cinematicGlow 2s ease-in-out';
      
      // Add scene title overlay
      this.showSceneTitle(scene.title);
      
      // Start typewriter effect for this scene
      setTimeout(() => {
        if (!this.hasInteracted) {
          this.typewriterService.startTypewriter(scene.id);
        }
      }, 500); // Start typing after 0.5 seconds
    }
  }

  private showSceneTitle(title: string) {
    // Create or update scene title overlay
    let titleOverlay = document.getElementById('scene-title');
    if (!titleOverlay) {
      titleOverlay = document.createElement('div');
      titleOverlay.id = 'scene-title';
      titleOverlay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffd700;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        pointer-events: none;
      `;
      document.body.appendChild(titleOverlay);
    }
    
    titleOverlay.textContent = title;
    titleOverlay.style.opacity = '1';
    
    // Fade out after 1.5 seconds
    setTimeout(() => {
      titleOverlay.style.opacity = '0';
    }, 1500);
  }

  private restartMovie() {
    // Restart the movie from the beginning
    this.currentIndex = 0;
    this.startMovie();
  }

  getMovieScenes(): MovieScene[] {
    return this.movieScenes;
  }

  getCurrentScene(): MovieScene | null {
    return this.movieScenes[this.currentIndex] || null;
  }

  getTotalDuration(): number {
    return this.totalDuration;
  }

  ngOnDestroy() {
    // Clean up all event listeners
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
    if (this.keyListener) {
      document.removeEventListener('keydown', this.keyListener);
    }
    if (this.touchListener) {
      document.removeEventListener('touchstart', this.touchListener);
    }
    if (this.wheelListener) {
      document.removeEventListener('wheel', this.wheelListener);
    }
    
    // Clear all intervals and timeouts
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    if (this.interactionTimeout) {
      clearTimeout(this.interactionTimeout);
    }
    
    // Remove scene title overlay if exists
    const titleOverlay = document.getElementById('scene-title');
    if (titleOverlay) {
      titleOverlay.remove();
    }
  }
}
