import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  faIcon?: string;
  color: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  activeCategory = 'All';

  constructor() { }

  categories = ['All', 'Frontend', 'Backend', 'DataBase', 'Tools'];

  // Got CDN from https://thesvg.org/
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 95,
      icon: 'https://thesvg.org/icons/angular/default.svg',
      faIcon: 'fab fa-angular',
      color: '#dd0031',
      category: 'Frontend',
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: 'https://thesvg.org/icons/typescript/default.svg',
      faIcon: 'fas fa-code',
      color: '#3178c6',
      category: 'Frontend',
    },
    {
      name: 'HTML',
      level: 97,
      icon: 'https://thesvg.org/icons/html5/default.svg',
      faIcon: 'fab fa-html5',
      color: '#e34f26',
      category: 'Frontend',
    },
    {
      name: 'CSS',
      level: 90,
      icon: 'https://thesvg.org/icons/css/default.svg',
      faIcon: 'fab fa-html5',
      color: '#e34f26',
      category: 'Frontend',
    },
    {
      name: 'JavaScript',
      level: 92,
      icon: 'https://thesvg.org/icons/javascript/default.svg',
      faIcon: 'fab fa-js',
      color: '#f7df1e',
      category: 'Frontend',
    },

    {
      name: 'SpringBoot',
      level: 80,
      icon: 'https://thesvg.org/icons/spring-boot/default.svg',
      faIcon: 'fas fa-seedling',
      color: '#6db33f',
      category: 'Backend',
    },
    {
      name: 'Microservices',
      level: 60,
      icon: 'https://thesvg.org/icons/aws-res-amazon-ec2-aws-microservice-extractor-for-net/default.svg',
      faIcon: 'fas fa-cogs',
      color: '#6c757d',
      category: 'Backend',
    },
    {
      name: 'Node.js',
      level: 85,
      icon: 'https://thesvg.org/icons/nodejs/default.svg',
      faIcon: 'fab fa-node-js',
      color: '#339933',
      category: 'Backend',
    },
    {
      name: 'Express.js',
      level: 90,
      icon: 'https://thesvg.org/icons/expressdotjs/default.svg',
      faIcon: 'fas fa-server',
      color: '#8b85ff',
      category: 'Backend',
    },
    {
      name: 'Java',
      level: 85,
      icon: 'https://thesvg.org/icons/java/default.svg',
      faIcon: 'fab fa-java',
      color: '#f89820',
      category: 'Backend',
    },

    {
      name: 'MongoDB',
      level: 78,
      icon: 'https://thesvg.org/icons/mongodb/dark.svg',
      faIcon: 'fas fa-leaf',
      color: '#47a248',
      category: 'DataBase',
    },
    {
      name: 'PostgreSQL',
      level: 72,
      icon: 'https://thesvg.org/icons/postgresql/default.svg',
      faIcon: 'fas fa-database',
      color: '#336791',
      category: 'DataBase',
    },
    {
      name: 'REST APIs',
      level: 88,
      icon: 'https://thesvg.org/icons/gcp-api/default.svg',
      faIcon: 'fas fa-plug',
      color: '#ff6584',
      category: 'Backend',
    },
    {
      name: 'Git',
      level: 90,
      icon: 'https://thesvg.org/icons/git/default.svg',
      faIcon: 'fab fa-github',
      color: '#6e5494',
      category: 'Tools',
    },
    {
      name: 'GitHub',
      level: 90,
      icon: 'https://thesvg.org/icons/github/dark.svg',
      faIcon: 'fab fa-github',
      color: '#6e5494',
      category: 'Tools',
    },
    {
      name: 'Docker',
      level: 70,
      icon: 'https://thesvg.org/icons/docker/default.svg',
      faIcon: 'fab fa-docker',
      color: '#2496ed',
      category: 'Tools',
    },
    {
      name: 'Redis',
      level: 80,
      icon: 'https://thesvg.org/icons/redis/default.svg',
      faIcon: 'fas fa-fire-flame-curved',
      color: '#DC382D',
      category: 'DataBase',
    },
    {
      name: 'Microsoft Word',
      level: 95,
      icon: 'https://thesvg.org/icons/microsoft-word/default.svg',
      faIcon: 'far fa-file-word',
      color: '#2B579A',
      category: 'Tools',
    },
    {
      name: 'Microsoft Powerpoint',
      level: 95,
      icon: 'https://thesvg.org/icons/microsoft-powerpoint/default.svg',
      faIcon: 'far fa-file-word',
      color: '#2B579A',
      category: 'Tools',
    },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'All') return this.skills;
    return this.skills.filter((s) => s.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  getLevelLabel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  }
}
