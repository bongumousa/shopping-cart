import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCohUb4lUmY7xPEM6wEBy5MdeDG_eOOIKw",
//   authDomain: "pingembo-721f1.firebaseapp.com",
//   databaseURL: "https://pingembo-721f1-default-rtdb.firebaseio.com",
//   projectId: "pingembo-721f1",
//   storageBucket: "pingembo-721f1.appspot.com",
//   messagingSenderId: "1079845605013",
//   appId: "1:1079845605013:web:d6f8161e000679bbead59c",
//   measurementId: "G-B91R7TV3LJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@NgModule({ 
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive, BrowserAnimationsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatCardModule, MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
