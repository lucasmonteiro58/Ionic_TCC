import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private router: Router, public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let data = this.activeRoute.snapshot.paramMap.get('data');
    console.log(data);
  }


  goGrafico(data, passos, duracao, distancia, calorias) {
    this.router.navigateByUrl('grafico/' + data + '/' + passos + '/' + duracao + '/' + distancia + '/' + calorias);
  }

}
