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

  content: Array<any> = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe((response: any) => {
      if (response) {
        this.content = response.data;
        console.log("aca esta:---->", this.content[0]);
      }else{
        console.log ('servicio no disponible');
      }
    });
  }
}
