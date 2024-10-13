import { Component, OnInit } from '@angular/core';
import { IonFooter } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, people, bag, search } from 'ionicons/icons';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonFooter,IonicModule],
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({ home, people, bag, search });
  }

  ngOnInit() {}

  toPessoa(): void {
    this.router.navigate(['/pessoa']); 
  }

}
