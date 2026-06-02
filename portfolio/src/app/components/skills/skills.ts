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

  constructor() {}

  categories = ['All', 'Frontend', 'Backend', 'Tools'];

  skills: Skill[] = [
    {
      name: 'Angular',
      level: 95,
      icon: '🅰️',
      faIcon: 'fab fa-angular',
      color: '#dd0031',
      category: 'Frontend',
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: '🔷',
      faIcon: 'fas fa-code',
      color: '#3178c6',
      category: 'Frontend',
    },
    {
      name: 'HTML & CSS',
      level: 97,
      icon: '🎨',
      faIcon: 'fab fa-html5',
      color: '#e34f26',
      category: 'Frontend',
    },
    {
      name: 'JavaScript',
      level: 92,
      icon: '🟡',
      faIcon: 'fab fa-js',
      color: '#f7df1e',
      category: 'Frontend',
    },
    {
      name: 'Node.js',
      level: 85,
      icon: '🟢',
      faIcon: 'fab fa-node-js',
      color: '#339933',
      category: 'Backend',
    },
    {
      name: 'Express.js',
      level: 80,
      icon: '⚡',
      faIcon: 'fas fa-server',
      color: '#8b85ff',
      category: 'Backend',
    },
    {
      name: 'Java',
      level: 85,
      icon: '☕',
      faIcon: 'fab fa-java',
      color: '#f89820',
      category: 'Backend',
    },
    {
      name: 'SpringBoot',
      level: 82,
      icon: '🍃',
      faIcon: 'fas fa-seedling',
      color: '#6db33f',
      category: 'Backend',
    },
    {
      name: 'MongoDB',
      level: 78,
      icon: '🍃',
      faIcon: 'fas fa-leaf',
      color: '#47a248',
      category: 'Backend',
    },
    {
      name: 'PostgreSQL',
      level: 72,
      icon: '🐘',
      faIcon: 'fas fa-database',
      color: '#336791',
      category: 'Backend',
    },
    {
      name: 'REST APIs',
      level: 88,
      icon: '🔗',
      faIcon: 'fas fa-plug',
      color: '#ff6584',
      category: 'Backend',
    },
    {
      name: 'Git & GitHub',
      level: 90,
      icon: '🐙',
      faIcon: 'fab fa-github',
      color: '#6e5494',
      category: 'Tools',
    },
    {
      name: 'Docker',
      level: 70,
      icon: '🐳',
      faIcon: 'fab fa-docker',
      color: '#2496ed',
      category: 'Tools',
    },
    {
      name: 'Redis',
      level: 70,
      icon: '🔴',
      faIcon: 'fas fa-fire-flame-curved',
      color: '#DC382D',
      category: 'Tools',
    },
    {
      name: 'Microsoft Word',
      level: 95,
      icon: '📄',
      faIcon: 'far fa-file-word',
      color: '#2B579A',
      category: 'Tools',
    },
    {
      name: 'Microsoft Powerpoint',
      level: 95,
      icon: '📄',
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
