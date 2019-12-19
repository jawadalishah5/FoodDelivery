import { Component, OnInit } from '@angular/core';
import { AuthService } from  "../services/auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }


  signup(){
    this.auth.signup(this.email,this.password);
    this.email=this.password = '';
    alert("order is placed :)")
  }
}
