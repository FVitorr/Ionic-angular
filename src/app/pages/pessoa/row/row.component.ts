import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RowComponent implements OnInit {
  @Input() nome: string = 'Cliente 1';
  @Input() endereco: string = 'Rua Exemplo, 123';
  @Input() telefone: string = '(31) 9999-9999';

  expandedText: string | null = null; // Adiciona uma propriedade para controlar o texto expandido

  constructor() {}

  ngOnInit() {}

  expandText(text: string) {
    // Alterna entre expandir e colapsar o texto
    this.expandedText = this.expandedText === text ? null : text;
  }
}
