import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: string = "ProfilePage";
  tab2: string = "GroupsPage";
  tab3: string = "ChatsPage";
  tab4: string = "MapPage";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
