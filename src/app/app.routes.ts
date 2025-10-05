import { Routes } from '@angular/router';
import { SobreMim } from './components/sobre-mim/sobre-mim';
import { Habilidades } from './components/habilidades/habilidades';
import { Projetos } from './components/projetos/projetos';
import { Certificados } from './components/certificados/certificados';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mim', pathMatch: 'full' },
  { path: 'sobre-mim', component: SobreMim },
  { path: 'certificados', component: Certificados },
  { path: 'habilidades', component: Habilidades },
  { path: 'projetos', component: Projetos },
];
