import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SlideButtonComponent } from "../../../../shared/components/slide-button/slide-button.component";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-contactform',
  imports: [FormsModule, CommonModule, SlideButtonComponent, RouterLink, TranslatePipe],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http = inject(HttpClient)

  @ViewChild('checkbox') checkboxRef!: ElementRef<HTMLInputElement>;

  showPrivacyWarning: boolean = false;
  submissionMessage: string = '';
  isSuccess: boolean | null = null;

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  mailTest = false;

  post = {
    endPoint: 'https://anne-dalchow.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.submissionMessage = '';
    this.isSuccess = null;

    const isPrivacyCheckboxChecked = this.checkboxRef.nativeElement.checked;
    if (!isPrivacyCheckboxChecked) {
      this.showPrivacyWarning = true;
      return;
    } else {
      this.showPrivacyWarning = false;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.checkboxRef.nativeElement.checked = false;
            this.contactData.checkbox = false;
            this.submissionMessage = 'Nachricht erfolgreich gesendet!';
            this.isSuccess = true;
            console.log('Nachricht erfolgreich gesendet!', response);
          },
          error: (error) => {
            this.submissionMessage = 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.';
            this.isSuccess = false;
            console.error('Fehler beim Senden der Nachricht:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.checkboxRef.nativeElement.checked = false;
      this.contactData.checkbox = false;

      this.submissionMessage = 'Formular im Testmodus erfolgreich zurückgesetzt. Nachricht gesendet';
      this.isSuccess = true;
      console.log('Formular im Testmodus zurückgesetzt. Nachricht gesendet');
    } else {
      console.log('Formular nicht gültig oder nicht abgeschickt.');
    }
  }

  onPrivacyCheckboxChange() {
    if (this.checkboxRef.nativeElement.checked) {
      this.showPrivacyWarning = false;
    }
  }
}
