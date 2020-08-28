import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    });
  }
}
