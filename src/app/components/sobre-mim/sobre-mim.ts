import { Component } from '@angular/core';
import { CarrouselProjetos } from "../carrousel-projetos/carrousel-projetos";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  imports: [CarrouselProjetos, RouterLink],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss'
})
export class SobreMim {

}
