import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { SkillsData } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  isDarkMode = false;
  skillsData$: Observable<SkillsData | null>;

  constructor(
    private themeService: ThemeService,
    private dataService: DataService
  ) {
    this.skillsData$ = this.dataService.getSkills();
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

