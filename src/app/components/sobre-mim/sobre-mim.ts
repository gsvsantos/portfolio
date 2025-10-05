import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { gSButtonsTypeEnum } from '../button/gSButtonsTypeEnum';
import { targetTypesEnum } from '../button/targetTypesEnum';

@Component({
  selector: 'app-sobre-mim',
  imports: [RouterLink, Card, Button],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  public itensProjetos = itensProjetos;
  public targetType = targetTypesEnum;
  public buttonType = gSButtonsTypeEnum;
}
