import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ResumeData } from '../../models/portfolio-data.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resumeData$: Observable<ResumeData | null>;

  constructor(private dataService: DataService) {
    this.resumeData$ = this.dataService.getResumeData();
  }

  ngOnInit() {
    // Load resume data
  }

  printResume() {
    window.print();
  }
}
