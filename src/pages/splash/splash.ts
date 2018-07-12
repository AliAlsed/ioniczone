import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  timer = "assets/imgs/bg.gif";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.navCtrl.setRoot(TabsPage);
    },4000)
  }

}
