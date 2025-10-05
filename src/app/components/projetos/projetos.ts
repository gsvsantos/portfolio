import { Component } from '@angular/core';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';

@Component({
  selector: 'app-projetos',
  imports: [Card],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  public itensProjetos = itensProjetos;
}
