import { Component } from '@angular/core';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-board-user',
  standalone: true,
  imports: [],
  templateUrl: './board-user.component.html',
  styleUrl: './board-user.component.css'
})
export class BoardUserComponent {
  content?: string;

  constructor (private userService : UserService){}
  
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data =>{
        this.content = data;
      },
      error: err =>{
        if(err.error){
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          }catch{
            this.content = `Error status: ${err.error}-${err.statusText}`;
          }
        }else{
          this.content = `Error status: ${err.error}`;
        }
      }
    });
  }

}
