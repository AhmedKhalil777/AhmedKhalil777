import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { MovieService } from './services/story.service';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, TypewriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isMovieMode = false;
  wasMovieMode = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // Subscribe to movie mode changes
    this.movieService.isMovieMode$.subscribe(movieMode => {
      if (this.isMovieMode && !movieMode) {
        // Movie was stopped
        this.wasMovieMode = true;
        // Hide the stopped indicator after 3 seconds
        setTimeout(() => {
          this.wasMovieMode = false;
        }, 3000);
      }
      this.isMovieMode = movieMode;
    });
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
    
    // Movie mode disabled on page load - user can start it manually from the header
    // setTimeout(() => {
    //   this.movieService.startMovie();
    // }, 1500);
  }
}

