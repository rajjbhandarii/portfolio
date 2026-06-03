import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  experiences = [
    { year: '', role: '', company: '', desc: '' },
    { year: '', role: '', company: '', desc: '' },
    { year: '', role: '', company: '', desc: '' },
  ];
}
