import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from './_service/storage.service';
import { AuthService } from './_service/auth.service';

//import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showBodegaBoard = false;
  user?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService

  ) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showBodegaBoard = this.roles.includes('ROLE_BODEGA');

      this.user = user.user;
    }
  }

  logout (): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log (res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log (err);
      }
      });
  }

}
