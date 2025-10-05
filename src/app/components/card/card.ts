import { Component, Input } from '@angular/core';
import { Certificado } from '../../models/certificado';
import { ItemProjeto } from '../../models/item-projetos';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) public lista: TiposAceitos[] = [];
  @Input({ required: true }) public mostrarStack: boolean = false;
  @Input({ required: true }) public mostrarBotoes: boolean = false;
  @Input() public quantidadeBlocos: number = 3;
}

type TiposAceitos = Certificado | ItemProjeto;
