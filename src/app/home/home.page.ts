import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonButton],
})
export class HomePage implements OnInit, OnDestroy {
  saudacao: string = this.obterSaudacao();
  dateTime: string = this.obterDataHoraAtual();
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.dateTime = this.obterDataHoraAtual();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  obterSaudacao(): string {
    const horaAtual = new Date().getHours();
    return horaAtual < 5 ? "Boa Noite" : horaAtual < 12 ? "Bom Dia" : "Boa Tarde";
  }

  obterDataHoraAtual(): string {
    const agora = new Date();
    return agora.toLocaleString('pt-BR', { timeZone: 'UTC', hour12: false });
  }
}
