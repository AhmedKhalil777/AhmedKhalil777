// Portfolio Data Models
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface StoryItem {
  icon: string;
  title: string;
  description: string;
  achievement: string;
}

export interface TechBadge {
  icon: string;
  label: string;
  delay: number;
}

export interface StatItem {
  icon: string;
  number: string;
  label: string;
}

export interface Button {
  text: string;
  icon: string;
  link: string;
  type: 'primary' | 'secondary';
}

export interface AboutSection {
  title: string;
  subtitle: string;
  greeting: string;
  introText: string;
  storyHighlights: StoryItem[];
  passionTitle: string;
  passionText: string;
  image: string;
  imageAlt: string;
  overlayTitle: string;
  overlayText: string;
  overlayButton: Button;
  techBadges: TechBadge[];
  achievementStats: StatItem[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  buttons: Button[];
  stats: StatItem[];
  image: string;
  imageAlt: string;
  techBadges: TechBadge[];
}

export interface NavigationItem {
  text: string;
  link: string;
}

export interface HeaderSection {
  brandName: string;
  brandSubtitle: string;
  navigation: NavigationItem[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  hero: HeroSection;
  about: AboutSection;
  header: HeaderSection;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  contact: ContactInfo;
}
