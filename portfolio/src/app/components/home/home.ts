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
    // Placeholder for resume download
    // alert('Resume download would be triggered here!');
  }
}
