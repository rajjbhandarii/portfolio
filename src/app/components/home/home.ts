import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  scrollToContact(event: Event) {
    event.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(event: Event) {
    event.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/Raj_Bhandari_CV.pdf';
    link.download = 'Raj_Bhandari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
