import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error status: ${err.status} - ${err.statusText}`;
          }
        }

        else {
          this.content = `Error with status: ${err.status}`;

        }
      }
    });
  }
}
