import { Component } from '@angular/core';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';
import { ItemProjeto } from '../../models/item-projetos';
import { Modal } from "../modal/modal";

@Component({
  selector: 'app-projetos',
  imports: [Card, Modal],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  public itensProjetos = itensProjetos;
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
