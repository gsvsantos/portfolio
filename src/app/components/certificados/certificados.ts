import { Component, OnInit } from '@angular/core';
import { certificados } from '../../utils/lista-certificados';

@Component({
  selector: 'app-certificados',
  imports: [],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados implements OnInit {
  public certificados = certificados;
  public ngOnInit(): void {
    console.log(this.certificados);
  }
}
