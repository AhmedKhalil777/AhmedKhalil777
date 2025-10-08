import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { MovieService } from '../../services/story.service';
import { DataService } from '../../services/data.service';
import { ViewService, ViewType } from '../../services/view.service';
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
  isDarkMode = false;
  isMovieMode = false;
  currentView: ViewType = 'hero';
  headerData$: Observable<HeaderSection | null>;

  constructor(
    private themeService: ThemeService,
    private movieService: MovieService,
    private dataService: DataService,
    private viewService: ViewService
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

    // Subscribe to view changes
    this.viewService.currentView$.subscribe(view => {
      this.currentView = view;
    });
  }

  switchToView(view: ViewType) {
    this.viewService.setView(view);
  }

  goToHome(event: Event) {
    event.preventDefault();
    this.viewService.switchToHero();
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

