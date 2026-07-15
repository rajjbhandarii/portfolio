import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  http = inject(HttpClient);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);
  hasError = signal(false);

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'bhandarirajjj@gmail.com', href: 'mailto:bhandarirajjj@gmail.com' },
  ];

  async onSubmit() {
    if (this.isSubmitting()) return;
    this.isSubmitting.set(true);
    this.hasError.set(false);

    // Simulate API call
    try {
      this.http.post('/api/contact', this.formData).subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.isSubmitted.set(true);
          this.formData = { name: '', email: '', subject: '', message: '' };
          setTimeout(() => this.isSubmitted.set(false), 4000);
        },
        error: () => {
          this.isSubmitting.set(false);
          this.hasError.set(true);
        }
      });
    } catch {
      this.isSubmitting.set(false);
      this.hasError.set(true);
    }

    this.isSubmitting.set(false);
    this.isSubmitted.set(true);

    // Reset form
    this.formData = { name: '', email: '', subject: '', message: '' };

    // Reset success message after 4s
    setTimeout(() => this.isSubmitted.set(false), 4000);
  }
}
