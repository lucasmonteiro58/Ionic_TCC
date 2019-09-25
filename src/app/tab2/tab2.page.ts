import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router, private platform: Platform, private statusBar: StatusBar) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  goRun() {
    this.router.navigate(['run']);
  }
}
