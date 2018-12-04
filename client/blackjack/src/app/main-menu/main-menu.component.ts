import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router, public afAuth: AngularFireAuth) { }
  logOutClicked() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
  playClicked() {
    this.router.navigateByUrl('/table');
  }

  ngOnInit() {
  }

}
