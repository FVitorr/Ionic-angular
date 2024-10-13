import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RowComponent } from './row/row.component';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
  standalone: true,
  imports: [IonicModule,
    RowComponent,HeaderComponent
  ],
})
export class PessoaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
