import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PortfolioData, PersonalInfo, HeroSection, AboutSection, HeaderSection, SkillsData, Project, Experience, ContactInfo, ResumeData } from '../models/portfolio-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<PortfolioData | null>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<PortfolioData>('assets/data/portfolio-data.json')
      .pipe(
        tap(data => this.dataSubject.next(data))
      )
      .subscribe({
        error: (error) => {
          console.error('Error loading portfolio data:', error);
        }
      });
  }

  // Get all data
  getPortfolioData(): Observable<PortfolioData | null> {
    return this.data$;
  }

  // Get specific sections
  getPersonalInfo(): Observable<PersonalInfo | null> {
    return this.data$.pipe(
      map(data => data?.personalInfo || null)
    );
  }

  getHeroSection(): Observable<HeroSection | null> {
    return this.data$.pipe(
      map(data => data?.hero || null)
    );
  }

  getAboutSection(): Observable<AboutSection | null> {
    return this.data$.pipe(
      map(data => data?.about || null)
    );
  }

  getHeaderSection(): Observable<HeaderSection | null> {
    return this.data$.pipe(
      map(data => data?.header || null)
    );
  }

  getSkills(): Observable<SkillsData | null> {
    return this.data$.pipe(
      map(data => data?.skills || null)
    );
  }

  getProjects(): Observable<Project[]> {
    return this.data$.pipe(
      map(data => data?.projects || [])
    );
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.data$.pipe(
      map(data => data?.projects?.filter(project => project.featured) || [])
    );
  }

  getExperience(): Observable<Experience[]> {
    return this.data$.pipe(
      map(data => data?.experience || [])
    );
  }

  getContactInfo(): Observable<ContactInfo | null> {
    return this.data$.pipe(
      map(data => data?.contact || null)
    );
  }

  getResumeData(): Observable<ResumeData | null> {
    return this.data$.pipe(
      map(data => data?.resume || null)
    );
  }

  // Utility methods
  getImagePath(imagePath: string): string {
    return imagePath.startsWith('assets/') ? imagePath : `assets/${imagePath}`;
  }

  getFullImagePath(imagePath: string): string {
    return this.getImagePath(imagePath);
  }
}
