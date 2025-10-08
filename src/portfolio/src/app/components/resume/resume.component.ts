import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ResumeData } from '../../models/portfolio-data.model';

declare var AOS: any;

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  resumeData$: Observable<ResumeData | null>;

  constructor(private dataService: DataService) {
    this.resumeData$ = this.dataService.getResumeData();
  }

  ngOnInit() {
    // Initialize AOS (Animate On Scroll) with magnificent settings
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 50,
        easing: 'ease-out-cubic',
        anchorPlacement: 'top-bottom',
        mirror: true,
        disable: false
      });
    }

    // Scroll to top when resume loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    // Refresh AOS on component destroy
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  printResume() {
    // Temporarily hide animations for printing
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
      el.classList.remove('aos-animate');
    });

    // Print
    window.print();

    // Restore animations after print
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }
}
