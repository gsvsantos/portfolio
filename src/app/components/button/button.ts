import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { gSButtonsTypeEnum } from './gSButtonsTypeEnum';
import { targetTypesEnum } from './targetTypesEnum';

@Component({
  selector: 'gs-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({ required: true }) public tipo!: gSButtonsTypeEnum;
  @Input({ required: true }) public texto: string = '';
  @Input({ required: true }) public link: string = '';
  @Input({ required: true }) public target!: targetTypesEnum;
  @Input({ required: true }) public iconeBootstrap: string = '';
  public targetType = targetTypesEnum;
  public enum = gSButtonsTypeEnum;
}


