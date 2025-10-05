import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { itensProjetos } from '../../utils/lista-projetos';
import { Card } from '../card/card';

@Component({
  selector: 'app-sobre-mim',
  imports: [RouterLink, Card],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  public itensProjetos = itensProjetos;
}
