import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peso: number;
  altura: number;
  imc: number;
  viewCondicao: string;
  viewImc: string;

  constructor( public navCtrl: NavController) {
  }

  informarImc(imc: number): string {
    if (imc < 16) {
      return 'Magreza grave';
    } else if (imc < 17) {
      return 'Magreza moderada';
    } else if (imc < 18.5) {
      return 'Magreza leve';
    } else if (imc < 25) {
      return 'Saudável';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else if (imc < 35) {
      return 'Obesidade grau I';
    } else if (imc < 40) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  }


  calcImc() {
    this.imc = (this.peso / (this.altura * this.altura));
    this.viewImc = (this.imc).toFixed(2);
    console.log(this.viewImc);

    this.viewCondicao = this.informarImc(this.imc);
  }
}
