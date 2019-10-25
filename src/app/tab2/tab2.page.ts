import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {Platform} from '@ionic/angular';
// import { MobileAccessibility } from '@ionic-native/mobile-accessibility';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router, private platform: Platform) {
    
  }

  goRun() {
    this.router.navigate(['run']);
  }
}
