import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { SobreMim } from './components/sobre-mim/sobre-mim';
import { Habilidades } from './components/habilidades/habilidades';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'sobre-mim', component: SobreMim },
  { path: 'habilidades', component: Habilidades },
  { path: 'projetos', component: Projetos },
  { path: 'contato', component: Contato },
];
