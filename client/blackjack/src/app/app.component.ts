import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',

  //templateUrl:'<button (click)="SignUp()">Add a User!</button>'
  templateUrl:'./app.component.html',


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackjack';
  constructor(public afAuth: AngularFireAuth) {
   }
    login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    }
    logout() {
      this.afAuth.auth.signOut();
    }

  //this.router.navigateByUrl
  //private userCounter = 0;


}
