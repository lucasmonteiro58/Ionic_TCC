import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage {

  public data: any;
  public passos: any;
  public duracao: any;
  public distancia: any;
  public calorias: any;


  constructor(private router: Router) { 
    this.data = '20/5';
    this.passos = '3792';
    this.duracao = '32:14';
    this.distancia = '2.15';
    this.calorias = '234';
  }
  goBack() {
    this.router.navigate(['back']);
  }
}
