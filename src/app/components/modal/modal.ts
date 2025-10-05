import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProjeto } from '../../models/item-projetos';
import { Button } from '../button/button';
import { gSButtonsTypeEnum } from '../button/gSButtonsTypeEnum';
import { targetTypesEnum } from '../button/targetTypesEnum';

@Component({
  selector: 'gs-modal',
  imports: [Button],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input({ required: true }) public isOpen: boolean = false;
  @Input() public item: ItemProjeto | null = null;

  @Output() public closed: EventEmitter<void> = new EventEmitter<void>();
  public tipoGuia = targetTypesEnum;
  public tipoBotao = gSButtonsTypeEnum;

  public requestClose(): void {
    this.closed.emit();
  }
}
