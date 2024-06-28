import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
