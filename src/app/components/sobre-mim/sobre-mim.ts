import { Component } from '@angular/core';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { gSButtonsTypeEnum } from '../button/gSButtonsTypeEnum';
import { targetTypesEnum } from '../button/targetTypesEnum';
import { Modal } from "../modal/modal";
import { ItemProjeto } from '../../models/item-projetos';

@Component({
  selector: 'app-sobre-mim',
  imports: [Card, Button, Modal],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  public itensProjetos = itensProjetos;
  public tipoGuia = targetTypesEnum;
  public tipoBotao = gSButtonsTypeEnum;
  public estaModalAberta: boolean = false;
  public itemProjetoSelecionado: ItemProjeto | null = null;

  public aoVisualizarItemProjeto(itemProjeto: ItemProjeto): void {
    this.itemProjetoSelecionado = itemProjeto;
    this.estaModalAberta = true;
    console.log(itemProjeto);
  }

  public aoFecharModal(): void {
    this.estaModalAberta = false;
    this.itemProjetoSelecionado = null;
  }
}
