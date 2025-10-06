import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { MovieService } from '../../services/story.service';
import { DataService } from '../../services/data.service';
import { HeaderSection } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isDarkMode = false;
  isMovieMode = false;
  headerData$: Observable<HeaderSection | null>;

  constructor(
    private themeService: ThemeService,
    private movieService: MovieService,
    private dataService: DataService
  ) {
    this.headerData$ = this.dataService.getHeaderSection();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    // Subscribe to theme changes
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
    
    // Subscribe to movie mode changes
    this.movieService.isMovieMode$.subscribe(movieMode => {
      this.isMovieMode = movieMode;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMovie() {
    if (this.isMovieMode) {
      this.movieService.stopMovie();
    } else {
      this.movieService.startMovie();
    }
  }
}

