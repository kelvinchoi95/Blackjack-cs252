import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',

  //templateUrl:'<button (click)="SignUp()">Add a User!</button>'
  templateUrl:'./app.component.html',


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackjack';


  //this.router.navigateByUrl
  //private userCounter = 0;


}
