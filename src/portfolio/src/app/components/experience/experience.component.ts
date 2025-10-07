import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isDarkMode = false;
  experienceData$: Observable<Experience[] | null>;

  constructor(
    private themeService: ThemeService,
    private dataService: DataService
  ) {
    this.experienceData$ = this.dataService.getExperience();
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

