import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private statusBar: StatusBar) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#ffffff');

  }

  goGrafico() {
    this.router.navigate(['grafico']);
  }

}
