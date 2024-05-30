import { Component } from '@angular/core';
import { StorageService } from '../_service/storage.service';
import { AuthService } from '../_service/auth.service';
import { FormsModule } from '@angular/forms'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: any = {
    userName: null,
    password: null,
    email: null
  };
  isSuccesfull = false;
  isSignunFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private storageService: StorageService) { }

  onSubmit(): void {
    const { userName, password, email } = this.form;

    this.authService.register(userName, password, email).subscribe({
      next: data => {
        console.log(data);
        this.isSuccesfull = true;
        this.isSignunFailed = false
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignunFailed = true;
      }
    });
  }
}
