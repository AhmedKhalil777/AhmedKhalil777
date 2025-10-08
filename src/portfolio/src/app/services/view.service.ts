import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ViewType = 'hero' | 'resume';

declare var AOS: any;

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private currentViewSubject = new BehaviorSubject<ViewType>('hero');
  public currentView$: Observable<ViewType> = this.currentViewSubject.asObservable();

  constructor() {
    // Check initial hash on service creation
    const hash = window.location.hash;
    if (hash === '#resume') {
      this.currentViewSubject.next('resume');
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash;
      if (newHash === '#resume') {
        this.currentViewSubject.next('resume');
      } else if (newHash === '#home' || newHash === '' || newHash === '#') {
        this.currentViewSubject.next('hero');
      }
    });

    // Listen for custom events
    window.addEventListener('switch-to-resume', () => {
      this.setView('resume');
    });

    window.addEventListener('switch-to-hero', () => {
      this.setView('hero');
    });
  }

  getCurrentView(): ViewType {
    return this.currentViewSubject.value;
  }

  setView(view: ViewType) {
    this.currentViewSubject.next(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', view === 'resume' ? '#resume' : '#home');
    
    // Refresh AOS animations after view change
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }

  switchToHero() {
    this.setView('hero');
    window.dispatchEvent(new CustomEvent('switch-to-hero'));
  }

  switchToResume() {
    this.setView('resume');
    window.dispatchEvent(new CustomEvent('switch-to-resume'));
  }
}

