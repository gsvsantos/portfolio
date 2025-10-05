import { Component } from '@angular/core';
import { certificados } from '../../utils/lista-certificados';

@Component({
  selector: 'app-certificados',
  imports: [],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados {
  public certificados = certificados;
}
