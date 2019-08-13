import { Component, OnInit, ViewChild } from '@angular/core';
import {Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: any;
  constructor(private router: Router) { }

  goRun() {
    this.router.navigate(['run']);
  }
  OnInit() {
    const position = new google.maps.LatLng(-21.763409, -43.349034);
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

}

