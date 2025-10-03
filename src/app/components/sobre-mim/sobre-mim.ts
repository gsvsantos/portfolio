import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemProjeto } from '../../models/item-projetos';

@Component({
  selector: 'app-sobre-mim',
  imports: [RouterLink],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})
export class SobreMim {
  public itensProjetos: ItemProjeto[] = [
    {
      titulo: 'Gerador de Testes',
      urlImagem: '',
      urlGif: 'https://i.imgur.com/eKoM8DM.gif',
      urlRepositorio: 'https://github.com/gsvsantos/GeradorDeTestes',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `Este projeto em ASP.NET MVC é focado em automação e qualidade. Ele gera PDFs com QuestPDF e utiliza logs estruturados com Serilog.`,
    },
    {
      titulo: 'Valet WebAPI',
      urlImagem: '',
      urlGif: 'https://i.imgur.com/tIFABjc.gif',
      urlRepositorio: 'https://github.com/gsvsantos/GestaoDeEstacionamento-WebAPI',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O destaque do meu portfólio. Uma API robusta em .NET 8 com arquitetura CQRS, segurança JWT e testes de integração com Testcontainers.`,
    },
    {
      titulo: 'Valet Angular',
      urlImagem: 'https://placehold.co/1200x800?text=Em Desenvolvimento',
      urlGif: '',
      urlRepositorio: '',
      stack: [],
      descricao: `Meu projeto atual, um front-end em Angular para consumir a API multi-tenant. Focado em Formulários Reativos e HttpClient/Interceptors.`,
    },
  ];
}
