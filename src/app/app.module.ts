import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
//import { FilePath } from '@ionic-native/file-path'; 

import { config } from './app.firebaseconfig';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { GroupsProvider } from '../providers/groups/groups';
import { RequestsProvider } from '../providers/requests/requests';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { ChatProvider } from '../providers/chat/chat';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, Geocoder } from '@ionic-native/google-maps';
import { Toast } from '@ionic-native/toast';
import { Device } from '@ionic-native/device'; 

import { MapPage } from '../pages/map/map'; 

@NgModule({
  declarations: [
    MyApp,
    //MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,  
    FileChooser,  
    Geolocation,
    GoogleMaps,
    Geocoder,
    Toast,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    GroupsProvider,
    RequestsProvider,
    ImghandlerProvider,
    ChatProvider,
    
  ]
})
export class AppModule {}
