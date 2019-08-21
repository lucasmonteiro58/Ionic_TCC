import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-run',
  templateUrl: './run.page.html',
  styleUrls: ['./run.page.scss'],
})
export class RunPage implements OnInit {

  public btn1: any;
  public btn2: any;
  public btn3: any;
  public hora: number;
  public minutos: number;
  public segundos: number;
  public hour: any;
  public min: any;
  public sec: any;
  public contador: any;
  public timing: number;
  public contadorKm: any;
  public km: number;
  public kmString: any;
  public contadorKcal: any;
  public Kcal: number;
  public KcalString: any;
  // tslint:disable-next-line: no-inferrable-types
  isStarted: boolean = false;
  // tslint:disable-next-line: no-inferrable-types
  isPaused: boolean = false;

  constructor(private router: Router) {
    this.btn1 = '../assets/play.svg';
    this.btn2 = '../assets/pause.svg';
    this.btn3 = '../assets/stop.svg';
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.hour = '00';
    this.min = '00';
    this.sec = '00';
    this.km = 0;
    this.kmString = '0.0';
    this.Kcal = 0;
    this.KcalString = '0 Kcal';
   }

  ngOnInit() {
  }

  zerarContadores() {
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.hour = '00';
    this.min = '00';
    this.sec = '00';
    this.km = 0;
    this.kmString = '0.0';
    this.Kcal = 0;
    this.KcalString = '0 Kcal';
  }

  startRun() {
    this.isStarted = true;
    this.isPaused = false;
    this.contador = undefined;
    this.contadorKm = undefined;
    this.contadorKcal = undefined;
    this.startCronometro();
    this.startKm();
    this.startKcal();
  }

  pauseRun() {
    this.isStarted = false;
    this.isPaused = true;
    clearInterval(this.contador);
    clearInterval(this.contadorKm);
    clearInterval(this.contadorKcal);
  }

  stopRun() {
    this.router.navigate(['']);
    this.isStarted = false;
    this.isPaused = false;
    this.zerarContadores();
  }


  startCronometro() {
    if ( this.isStarted ) {
      if (this.contador === undefined) {
        this.contador = setInterval(() => {
          this.segundos += 1;
          if (this.segundos < 10) {
              this.sec = '0' + this.segundos;
            } else {
              this.sec = this.segundos;
            }
          if (this.segundos === 60) {
            this.segundos = 0;
            this.minutos += 1;
            if (this.minutos < 10) {
              this.min = '0' + this.minutos;
            } else {
              this.min = this.minutos;
            }
            if (this.minutos === 60) {
              this.minutos = 0;
              this.hora += 1;
              if (this.hora < 10) {
                this.hour = '0' + this.hora;
              } else {
                this.hour = this.hora;
              }
              if (this.hora === 24) {
                this.hora = 0;
              }
            }
          }
        }
          , 1000 );
      }
    }
  }

  startKm() {
    if (this.isStarted) {
      if (this.contadorKm === undefined) {
        this.contadorKm = setInterval(() => {
         this.km += 0.1;
         this.kmString = this.km.toFixed(1) + '';
        }
          , 5000);
      }
    }
  }

  startKcal() {
    if (this.isStarted) {
      if (this.contadorKcal === undefined) {
        this.contadorKcal = setInterval(() => {
          this.Kcal += 1;
          this.KcalString = this.Kcal + ' Kcal';
        }
          , 2000);
      }
    }
  }

}
