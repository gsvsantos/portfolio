import { Component } from '@angular/core';
import { itensProjetos } from '../../utils/lista-projetos';

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  public itensProjetos = itensProjetos;
}
