import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { AboutSection } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isDarkMode = false;
  aboutData$: Observable<AboutSection | null>;

  constructor(
    private themeService: ThemeService,
    private dataService: DataService
  ) {
    this.aboutData$ = this.dataService.getAboutSection();
  }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  getImagePath(imagePath: string): string {
    return this.dataService.getImagePath(imagePath);
  }
}