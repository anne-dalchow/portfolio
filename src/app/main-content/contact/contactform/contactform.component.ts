import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-contactform",
  imports: [FormsModule, CommonModule, RouterLink, TranslatePipe],
  templateUrl: "./contactform.component.html",
  styleUrl: "./contactform.component.scss",
})
export class ContactformComponent {
  http = inject(HttpClient);
  translate = inject(TranslateService);

  @ViewChild("checkbox") checkboxRef!: ElementRef<HTMLInputElement>;

  showPrivacyWarning: boolean = false;
  submissionMessage: string = "";
  isSuccess: boolean | null = null;

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  };

  mailTest = false;

  post = {
    endPoint: "https://anne-dalchow.de/sendMail.php",
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        "Content-Type": "text/plain",
        responseType: "text",
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.submissionMessage = "";
    this.isSuccess = null;

    const isPrivacyCheckboxChecked = this.checkboxRef.nativeElement.checked;

    if (!isPrivacyCheckboxChecked) {
      this.showPrivacyWarning = true;
      return;
    } else {
      this.showPrivacyWarning = false;
    }

    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.checkboxRef.nativeElement.checked = false;
          this.contactData.checkbox = false;
          this.submissionMessage = this.translate.instant("contactForm.messages.success");
          this.isSuccess = true;
          setTimeout(() => {
            this.submissionMessage = "";
          }, 2500);
        },
        error: (error) => {
          this.submissionMessage = this.translate.instant("contactForm.messages.error");
          this.isSuccess = false;
        },
        complete: () => console.info("send post complete"),
      });
    }
  }

  onPrivacyCheckboxChange() {
    if (this.checkboxRef.nativeElement.checked) {
      this.showPrivacyWarning = false;
    }
  }
}
