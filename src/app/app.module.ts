import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NgxChessBoardModule } from "ngx-chess-board";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { GameComponent } from './game/game.component';
import { OpeningsComponent } from './openings/openings.component';
import { IntroComponent } from './intro/intro.component';
import { DialogContentIntro } from './intro/intro.component'

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AddOpeningComponent, DialogContentAdd } from './add-opening/add-opening.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OpeningsComponent,
    IntroComponent,
    DialogContentIntro,
    AddOpeningComponent,
    DialogContentAdd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChessBoardModule,
    MatCardModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
