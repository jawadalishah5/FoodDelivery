import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private authService:AuthService) { }
  email:string='sign in';
  ngOnInit() {
    this.authService.user_email.subscribe((email:string)=>{
      this.email = email;
    })
  }

}
