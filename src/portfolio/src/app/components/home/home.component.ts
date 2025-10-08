import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ResumeComponent } from '../resume/resume.component';
import { ViewService, ViewType } from '../../services/view.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ResumeComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentView: ViewType = 'hero';

  constructor(private viewService: ViewService) {}

  ngOnInit() {
    // Subscribe to view changes
    this.viewService.currentView$.subscribe(view => {
      this.currentView = view;
    });
  }
}

