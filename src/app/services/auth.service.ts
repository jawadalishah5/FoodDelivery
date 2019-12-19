import { Injectable } from '@angular/core';


import {AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  user:Observable<firebase.User>;
  user_email = new Subject();
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) 
  
  { }

  login(email:string ,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(
      value =>{
        console.log(value);
        this.user_email.next(value.user.email);
        this.router.navigate(['']);
      }
    ).catch( err =>{
      alert('You Dont have an account register first');
    }
    )
  }
  signup(email:string ,password:string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(
      value =>{
        console.log("success!",value);
        this.router.navigate(['order']);
      }
    ).catch( err =>{
      console.log('something is wrong', err.message);
    }
    )
  }
}
