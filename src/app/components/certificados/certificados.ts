import { Component } from '@angular/core';
import { certificados } from '../../utils/lista-certificados';
import { Card } from "../card/card";

@Component({
  selector: 'app-certificados',
  imports: [Card],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados {
  public certificados = certificados;
}
