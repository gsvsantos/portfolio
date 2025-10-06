import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Certificado } from '../../models/certificado';
import { ItemProjeto } from '../../models/item-projetos';
import { GsButtons, gsTiposBotaoEnum, gsTiposGuiaEnum, gsVariant } from 'gs-buttons';

@Component({
  selector: 'gs-card',
  imports: [GsButtons],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) public item!: TiposAceitos;
  @Input({ required: true }) public mostrarStack: boolean = false;
  @Input({ required: true }) public mostrarBotoes: boolean = false;
  @Output() public visualizarItemProjeto: EventEmitter<ItemProjeto> =
    new EventEmitter<ItemProjeto>();
  @Output() public visualizarItemCertificado: EventEmitter<Certificado> =
    new EventEmitter<Certificado>();

  public tipoGuia = gsTiposGuiaEnum;
  public tipoBotao = gsTiposBotaoEnum;
  public variante = gsVariant;

  public abrirModal(): void {
    const itemQualquer = this.item;
    if (itemQualquer?.tipo === 'itemProjeto') {
      this.visualizarItemProjeto.emit(this.item as ItemProjeto);
    } else if (itemQualquer?.tipo === 'certificado') {
      this.visualizarItemCertificado.emit(this.item as Certificado);
    }
  }
}

type TiposAceitos = Certificado | ItemProjeto;
