import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Ahmed Khalil</h3>
            <p>Senior .NET Engineer & Full-Stack Developer</p>
            <p class="footer-description">
              Passionate about building scalable applications with modern technologies. 
              Always learning, always growing.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4>Technologies</h4>
              <ul>
                <li><a href="#">.NET Core</a></li>
                <li><a href="#">Angular</a></li>
                <li><a href="#">Azure</a></li>
                <li><a href="#">Microservices</a></li>
                <li><a href="#">Docker</a></li>
                <li><a href="#">TypeScript</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:progeng_ahmed_khalil@outlook.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/ahmed-khalil-b09abb176/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/AhmedKhalil777" target="_blank">GitHub</a></li>
                <li><a href="https://twitter.com/ProgengAhmd" target="_blank">Twitter</a></li>
                <li><a href="https://www.facebook.com/ProgENGAhmedKhalil/" target="_blank">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-info">
            <p>&copy; {{ currentYear }} Ahmed Khalil. All rights reserved.</p>
            <p>Built with Angular 18 & ❤️</p>
          </div>
          
          <div class="footer-social">
            <a href="https://github.com/AhmedKhalil777" target="_blank" class="social-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-khalil-b09abb176/" target="_blank" class="social-link" title="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/ProgengAhmd" target="_blank" class="social-link" title="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/ProgENGAhmedKhalil/" target="_blank" class="social-link" title="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="mailto:progeng_ahmed_khalil@outlook.com" class="social-link" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-stats">
          <div class="stat-item">
            <i class="fas fa-code"></i>
            <span>5+ Years Experience</span>
          </div>
          <div class="stat-item">
            <i class="fas fa-project-diagram"></i>
            <span>50+ Projects</span>
          </div>
          <div class="stat-item">
            <i class="fas fa-users"></i>
            <span>20+ Happy Clients</span>
          </div>
          <div class="stat-item">
            <i class="fas fa-trophy"></i>
            <span>15+ Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 3rem 0 1rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }
    
    .footer-brand h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #ffd700, #ffed4e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .footer-brand p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1rem;
    }
    
    .footer-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      max-width: 300px;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .link-group h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #ffd700;
    }
    
    .link-group ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .link-group li {
      margin-bottom: 0.5rem;
    }
    
    .link-group a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.9rem;
    }
    
    .link-group a:hover {
      color: #ffd700;
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .footer-info p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.25rem;
      font-size: 0.9rem;
    }
    
    .footer-social {
      display: flex;
      gap: 1rem;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: #ffd700;
      color: #333;
      transform: translateY(-2px);
    }
    
    .footer-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    
    .stat-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    
    .stat-item i {
      color: #ffd700;
      font-size: 1.2rem;
    }
    
    .stat-item span {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-links {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
      
      .footer-stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .footer-links {
        grid-template-columns: 1fr;
      }
      
      .footer-stats {
        grid-template-columns: 1fr;
      }
      
      .footer-social {
        justify-content: center;
      }
    }
    
    /* Dark Theme Styles */
    :host-context(.dark-theme) .footer {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    :host-context(.dark-theme) .footer-brand h3 {
      color: #f0f0f0;
    }
    
    :host-context(.dark-theme) .footer-brand p {
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .footer-description {
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .footer-section h4 {
      color: #f0f0f0;
    }
    
    :host-context(.dark-theme) .footer-section a {
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .footer-section a:hover {
      color: #ffd700;
    }
    
    :host-context(.dark-theme) .social-links a {
      background: rgba(255, 255, 255, 0.05);
      color: #e0e0e0;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    :host-context(.dark-theme) .social-links a:hover {
      background: rgba(255, 215, 0, 0.1);
      color: #ffd700;
      border-color: rgba(255, 215, 0, 0.3);
    }
    
    :host-context(.dark-theme) .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #c0c0c0;
    }
    
    :host-context(.dark-theme) .footer-bottom a {
      color: #ffd700;
    }
    
    :host-context(.dark-theme) .footer-bottom a:hover {
      color: #ffed4e;
    }
  `]
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isDarkMode = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
}

