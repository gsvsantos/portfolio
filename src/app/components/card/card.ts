import { Component, Input } from '@angular/core';
import { Certificado } from '../../models/certificado';
import { ItemProjeto } from '../../models/item-projetos';

@Component({
  selector: 'gs-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) public item!: TiposAceitos;
  @Input({ required: true }) public mostrarStack: boolean = false;
  @Input({ required: true }) public mostrarBotoes: boolean = false;
  public itemProjetoSelecionado?: ItemProjeto;
}

type TiposAceitos = Certificado | ItemProjeto;
