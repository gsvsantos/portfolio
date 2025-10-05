import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { gSButtonsTypeEnum } from './gSButtonsTypeEnum';
import { targetTypesEnum } from './targetTypesEnum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gs-button',
  imports: [NgClass, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({ required: true }) public tipo!: gSButtonsTypeEnum;
  @Input({ required: true }) public texto: string = '';
  @Input() public link: string = '';
  @Input() public target!: targetTypesEnum;
  @Input({ required: true }) public iconeBootstrap: string = '';
  @Output() public modalState: EventEmitter<void> = new EventEmitter<void>();

  public tipoGuia = targetTypesEnum;
  public tipoBotao = gSButtonsTypeEnum;

  public get ehLinkExterno(): boolean {
    const linkNormalizado: string = (this.link ?? '').trim().toLowerCase();
    return (
      linkNormalizado.startsWith('http://') ||
      linkNormalizado.startsWith('https://') ||
      linkNormalizado.startsWith('mailto:') ||
      linkNormalizado.startsWith('tel:')
    );
  }

  public onActivated(): void {
    this.modalState.emit();
  }
}


