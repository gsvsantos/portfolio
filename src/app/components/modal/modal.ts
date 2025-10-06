import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProjeto } from '../../models/item-projetos';
import { Certificado } from '../../models/certificado';
import { GsButtons, gsTiposBotaoEnum, gsTiposGuiaEnum, gsVariant } from 'gs-buttons';

@Component({
  selector: 'gs-modal',
  imports: [GsButtons],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input({ required: true }) public isOpen: boolean = false;
  @Input() public itemProjeto: ItemProjeto | null = null;
  @Input() public certificado: Certificado | null = null;

  @Output() public closed: EventEmitter<void> = new EventEmitter<void>();
  public tipoGuia = gsTiposGuiaEnum;
  public tipoBotao = gsTiposBotaoEnum;
  public variante = gsVariant;

  public requestClose(): void {
    this.closed.emit();
  }
}
