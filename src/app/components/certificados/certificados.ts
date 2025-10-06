import { Component } from '@angular/core';
import { certificados } from '../../utils/lista-certificados';
import { Card } from '../card/card';
import { Certificado } from '../../models/certificado';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-certificados',
  imports: [Card, Modal],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados {
  public certificados = certificados;
  public estaModalAberta: boolean = false;
  public certificadoSelecionado: Certificado | null = null;

  public aoVisualizarCertificado(certificado: Certificado): void {
    this.certificadoSelecionado = certificado;
    this.estaModalAberta = true;
    console.log(certificado);
  }

  public aoFecharModal(): void {
    this.estaModalAberta = false;
    this.certificadoSelecionado = null;
  }
}
