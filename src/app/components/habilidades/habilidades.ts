import { Component } from '@angular/core';
import { itensHabilidades } from '../../utils/lista-itens-habilidade';
import { iconesHabilidades } from '../../utils/lista-icones-habilidade';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
})
export class Habilidades {
  public itensHabilidades = itensHabilidades;
  public iconesHabilidades = iconesHabilidades;
}
