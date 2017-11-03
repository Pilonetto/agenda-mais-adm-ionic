import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

      // Initialize Firebase
  // var config = {
  //     apiKey: "AIzaSyBAQNkXTWosQ9EcnBG98ts00vo1btEdF-M",
  //     authDomain: "agendamais-7887a.firebaseapp.com",
  //     databaseURL: "https://agendamais-7887a.firebaseio.com",
  //     projectId: "agendamais-7887a",
  //     storageBucket: "agendamais-7887a.appspot.com",
  //     messagingSenderId: "700314849825"
  //   };
  var config = {
    apiKey: "AIzaSyA6Qdd-G0stEPMrO_UE4DqL2cOoZLUQAfQ",
    authDomain: "ionicteste-17761.firebaseapp.com",
    databaseURL: "https://ionicteste-17761.firebaseio.com",
    projectId: "ionicteste-17761",
    storageBucket: "ionicteste-17761.appspot.com",
    messagingSenderId: "397444936405"
  };  
      firebase.initializeApp(config);

      firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });  

      firebase.auth().onAuthStateChanged((user) => {

          // if (!user) {
              console.log("not login");
              this.rootPage = Login;


          // } else {
          //     console.log("login");
          //     this.rootPage = HomePage;

          // }

      });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
