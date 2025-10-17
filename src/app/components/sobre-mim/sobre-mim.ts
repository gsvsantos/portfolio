import { Component } from '@angular/core';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';
import { Modal } from '../modal/modal';
import { ItemProjeto } from '../../models/item-projetos';
import { GsButtons, gsButtonTypeEnum, gsTabTargetEnum, gsVariant } from 'gs-buttons';

@Component({
  selector: 'app-sobre-mim',
  imports: [GsButtons, Card, Modal],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  public itensProjetos = itensProjetos;
  public tipoBotao = gsButtonTypeEnum;
  public tipoGuia = gsTabTargetEnum;
  public variante = gsVariant;
  public estaModalAberta: boolean = false;
  public itemProjetoSelecionado: ItemProjeto | null = null;

  public aoVisualizarItemProjeto(itemProjeto: ItemProjeto): void {
    this.itemProjetoSelecionado = itemProjeto;
    this.estaModalAberta = true;
  }

  public aoFecharModal(): void {
    this.estaModalAberta = false;
    this.itemProjetoSelecionado = null;
  }
}
