import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import { FormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component'; // <-- NgModel lives here

import { HttpClientModule }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MainMenuComponent } from './main-menu/main-menu.component';
<<<<<<< HEAD
import { AuthService } from './auth.service';
import { TableComponent } from './table/table.component';
=======
import { TableComponent } from './table/table.component';
import { PlayComponent } from './play/play.component';
>>>>>>> 7ae94e5bb929fdc9e274ed8da6df5e43a44ba9b2

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    LoginComponent,
    MainMenuComponent,
<<<<<<< HEAD
    TableComponent
=======
    TableComponent,
    PlayComponent
>>>>>>> 7ae94e5bb929fdc9e274ed8da6df5e43a44ba9b2
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'main-menu', component: MainMenuComponent, canActivate: [AuthService] }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
