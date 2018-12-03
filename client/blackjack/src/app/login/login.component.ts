import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*constructor(private router: Router, zone: NgZone, private auth: AuthService) {
    window['onSignIn'] = (user) => zone.run(() => this.onSignIn(user));
  }*/
  constructor(public afAuth: AngularFireAuth) {
   }
    login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    }
    logout() {
      this.afAuth.auth.signOut();
    }
  ngOnInit() {
  }

  /*onSignIn(googleUser) {
    if (this.auth.signIn(googleUser)) {
      this.router.navigateByUrl('/home');
    }
    */

    //this.stomp.setConnected();
    //var userID = this.auth.user_id;
    //let sendFormat = "{\"id\":\""+userID+"\"}";
    //this.stomp.sendID(sendFormat);

  //}

}
