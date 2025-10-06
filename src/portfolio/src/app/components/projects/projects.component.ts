import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Some of my recent work and side projects</p>
        </div>
        
        <div class="projects-grid auto-scroll-content">
          <!-- Project 1 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="100">
            <div class="project-image">
              <img src="../../../assets/images/project1.jpg" alt="E-Commerce Platform" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">E-Commerce Platform</h3>
              <p class="project-description">
                A full-stack e-commerce solution built with .NET Core, Angular, and Azure. 
                Features include user authentication, payment processing, inventory management, 
                and real-time notifications.
              </p>
              <div class="project-tech">
                <span class="tech-tag">.NET Core</span>
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Azure</span>
                <span class="tech-tag">SQL Server</span>
                <span class="tech-tag">Stripe API</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>15K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>3 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Team of 4</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 2 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="200">
            <div class="project-image">
              <img src="../../../assets/images/project2.jpg" alt="Microservices API" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Microservices API Gateway</h3>
              <p class="project-description">
                A scalable microservices architecture with API Gateway, service discovery, 
                and distributed logging. Built with .NET Core, Docker, and Kubernetes 
                for cloud deployment.
              </p>
              <div class="project-tech">
                <span class="tech-tag">.NET Core</span>
                <span class="tech-tag">Docker</span>
                <span class="tech-tag">Kubernetes</span>
                <span class="tech-tag">gRPC</span>
                <span class="tech-tag">Redis</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>25K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>6 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Team of 6</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 3 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="300">
            <div class="project-image">
              <img src="../../../assets/images/project3.jpg" alt="Real-time Dashboard" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Real-time Analytics Dashboard</h3>
              <p class="project-description">
                A real-time data visualization dashboard with live updates, interactive charts, 
                and custom widgets. Built with Angular, SignalR, and Azure Functions.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">SignalR</span>
                <span class="tech-tag">Chart.js</span>
                <span class="tech-tag">Azure Functions</span>
                <span class="tech-tag">Cosmos DB</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>12K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>2 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Solo Project</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 4 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="400">
            <div class="project-image">
              <img src="../../../assets/images/project4.jpg" alt="Mobile App Backend" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Mobile App Backend API</h3>
              <p class="project-description">
                A robust RESTful API for a mobile application with authentication, push notifications, 
                file uploads, and real-time messaging. Built with .NET Core and MongoDB.
              </p>
              <div class="project-tech">
                <span class="tech-tag">.NET Core</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">Firebase</span>
                <span class="tech-tag">Swagger</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>18K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>4 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Team of 3</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 5 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="500">
            <div class="project-image">
              <img src="../../../assets/images/project5.jpg" alt="Blazor Web App" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Blazor Web Application</h3>
              <p class="project-description">
                A modern web application built with Blazor Server and .NET Core. Features include 
                real-time updates, responsive design, and integration with external APIs.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Blazor</span>
                <span class="tech-tag">.NET Core</span>
                <span class="tech-tag">Entity Framework</span>
                <span class="tech-tag">SQL Server</span>
                <span class="tech-tag">Bootstrap</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>10K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>2 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Solo Project</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 6 -->
          <div class="project-card" data-aos="fade-up" data-aos-delay="600">
            <div class="project-image">
              <img src="../../../assets/images/project6.jpg" alt="Cloud Migration" class="project-img">
              <div class="project-overlay">
                <div class="project-links">
                  <a href="#" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" class="project-link" title="View Code">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">Cloud Migration Project</h3>
              <p class="project-description">
                Migrated a legacy application to Azure cloud with containerization, 
                CI/CD pipelines, and monitoring. Improved performance by 40% and reduced costs by 30%.
              </p>
              <div class="project-tech">
                <span class="tech-tag">Azure</span>
                <span class="tech-tag">Docker</span>
                <span class="tech-tag">Azure DevOps</span>
                <span class="tech-tag">Application Insights</span>
                <span class="tech-tag">PowerShell</span>
              </div>
              <div class="project-stats">
                <div class="stat">
                  <i class="fas fa-code"></i>
                  <span>8K+ Lines</span>
                </div>
                <div class="stat">
                  <i class="fas fa-clock"></i>
                  <span>3 Months</span>
                </div>
                <div class="stat">
                  <i class="fas fa-users"></i>
                  <span>Team of 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-cta" data-aos="fade-up" data-aos-delay="700">
          <div class="cta-content">
            <h3>Interested in working together?</h3>
            <p>I'm always open to discussing new projects and opportunities.</p>
            <a href="#contact" class="btn btn-primary">
              <i class="fas fa-envelope"></i>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 5rem 0;
      background: white;
    }
    
    /* Movie mode full screen - auto-scrolling content like movie scenes */
    :host-context(.movie-mode) .projects {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      position: relative;
    }
    
    /* Auto-scrolling content container */
    :host-context(.movie-mode) .projects .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    /* Auto-scroll animation for projects content */
    :host-context(.movie-mode) .projects .auto-scroll-content {
      animation: movieScroll 22s linear infinite;
      transform: translateY(0);
    }
    
    :host-context(.movie-mode) .projects .auto-scroll-content:hover {
      animation-play-state: paused;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .section-subtitle {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .project-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .project-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-card:hover .project-img {
      transform: scale(1.1);
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
    }
    
    .project-link {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    
    .project-link:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
    
    .project-content {
      padding: 2rem;
    }
    
    .project-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #333;
    }
    
    .project-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .tech-tag {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .project-stats {
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid #eee;
    }
    
    .stat {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #666;
      font-size: 0.9rem;
    }
    
    .stat i {
      color: #667eea;
    }
    
    .projects-cta {
      text-align: center;
      background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 3rem 2rem;
      border-radius: 20px;
      color: white;
    }
    
    .cta-content h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .cta-content p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .cta-content .btn {
      background: white;
      color: #667eea;
      padding: 12px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .cta-content .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-stats {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
      }
      
      .cta-content h3 {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
      .section-title {
        font-size: 2rem;
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .projects-cta {
        padding: 2rem 1rem;
      }
    }
    
    /* Dark Theme Styles */
    :host-context(.dark-theme) .projects {
      background: rgba(30, 30, 50, 0.95);
    }
    
    :host-context(.dark-theme) .section-title {
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    :host-context(.dark-theme) .section-subtitle {
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .project-card {
      background: rgba(30, 30, 50, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    :host-context(.dark-theme) .project-card:hover {
      border-color: rgba(255, 215, 0, 0.3);
      box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
    }
    
    :host-context(.dark-theme) .project-title {
      color: #f0f0f0;
    }
    
    :host-context(.dark-theme) .project-description {
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .project-tech {
      background: rgba(255, 215, 0, 0.1);
      color: #ffd700;
      border: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    :host-context(.dark-theme) .project-links a {
      background: rgba(255, 215, 0, 0.1);
      color: #ffd700;
      border: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    :host-context(.dark-theme) .project-links a:hover {
      background: rgba(255, 215, 0, 0.2);
      border-color: rgba(255, 215, 0, 0.5);
    }
  `]
})
export class ProjectsComponent implements OnInit {
  isDarkMode = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
}

