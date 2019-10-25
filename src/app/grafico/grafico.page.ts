import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit{

  public data: any;
  public passos: any;
  public duracao: any;
  public distancia: any;
  public calorias: any;


  constructor(private router: Router, public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.activeRoute.snapshot.paramMap.get('data');
    this.passos = this.activeRoute.snapshot.paramMap.get('passos');
    this.duracao = this.activeRoute.snapshot.paramMap.get('duracao');
    this.distancia = this.activeRoute.snapshot.paramMap.get('distancia');
    this.calorias = this.activeRoute.snapshot.paramMap.get('calorias');
  }

  goBack() {
    this.router.navigateByUrl('tabs/tab1');
  }
}
