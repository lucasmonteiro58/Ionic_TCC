import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMaps } from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild('map', { static: true} ) public mapElement: any;
  private loading: any;
  private map: GoogleMap;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {

   }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

    this.mapElement.style.width = this.platform.width() + 'px';
    this.mapElement.style.height = this.platform.height() + 'px';

    this.loadMap();
  }

  loadMap() {
    // this.loading = this.loadingCtrl.create({ message: 'Aguarde'});
    // await this.loading.present();

    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCBA2sw2SDLNj41vLMlAQCi3kcWE43Bedc',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCBA2sw2SDLNj41vLMlAQCi3kcWE43Bedc'
    });

    this.map = GoogleMaps.create(this.mapElement);
  }

}
