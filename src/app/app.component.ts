import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    //private statusBar: StatusBar,
    private platform: Platform,   
    public router:Router

  ) {
    this.initializeApp();
  }


  initializeApp(){
      this.platform.ready().then(()=> {
      //this.statusBar.styleDefault();      
      this.router.navigateByUrl('splash')
    });

  }
}
