import { ItemProjeto } from '../models/item-projetos';

export const itensProjetos: ItemProjeto[] = [
  {
    titulo: 'Valet WebAPI',
    urlImagem: '',
    urlGif: 'https://i.imgur.com/tIFABjc.gif',
    urlRepositorio: 'https://github.com/gsvsantos/GestaoDeEstacionamento-WebAPI',
    stack: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=net&theme=light',
      'https://skillicons.dev/icons?i=postgres&theme=light',
      'https://skillicons.dev/icons?i=redis&theme=light',
      'https://skillicons.dev/icons?i=swagger&theme=light',
      'https://skillicons.dev/icons?i=docker&theme=light',
    ],
    descricao:
      'Web API em .NET 8 com MediatR, AutoMapper, FluentValidation, versionamento de API, cache Redis e Swagger. Projeto com Testcontainers (175 testes em C#), Docker (Dockerfile + docker-compose) e CI via GitHub Actions. Pacotes de Identity/JWT presentes.',
  },
  {
    titulo: 'Gerador de Testes',
    urlImagem: '',
    urlGif: 'https://i.imgur.com/eKoM8DM.gif',
    urlRepositorio: 'https://github.com/gsvsantos/GeradorDeTestes',
    stack: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=net&theme=light',
      'https://skillicons.dev/icons?i=mssql&theme=light',
      'https://skillicons.dev/icons?i=postgres&theme=light',
      'https://skillicons.dev/icons?i=docker&theme=light',
    ],
    descricao:
      'API ASP.NET Core que gera PDFs (QuestPDF) com logs estruturados em Serilog. Usa EF Core para SQL Server e PostgreSQL; pacotes de Identity + JwtBearer; suíte de testes com MSTest, Moq e Testcontainers; Dockerfile e pipeline no GitHub Actions.',
  },
  {
    titulo: 'Controle de Cinema',
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=net&theme=light',
      'https://skillicons.dev/icons?i=postgres&theme=light',
      'https://skillicons.dev/icons?i=selenium&theme=light',
      'https://skillicons.dev/icons?i=docker&theme=light',
    ],
    descricao:
      'ASP.NET Core com EF Core (PostgreSQL), pacotes de Identity/JwtBearer e Serilog. Possui Selenium WebDriver/Support, 162 testes C#, Dockerfile e 2 workflows de GitHub Actions.',
  },
  {
    titulo: 'eAgenda',
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=net&theme=light',
      'https://skillicons.dev/icons?i=mssql&theme=light',
      'https://skillicons.dev/icons?i=postgres&theme=light',
    ],
    descricao:
      'ASP.NET Core com EF Core (SqlServer e PostgreSQL) e Serilog. Repositório com workflow de GitHub Actions.',
  },
  {
    titulo: 'Controle de Medicamentos',
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://skillicons.dev/icons?i=cs&theme=light',
      'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: 'ASP.NET Core que trabalha com CSV (CsvHelper) e geração de PDFs (iTextSharp).',
  },
  {
    titulo: 'Jogo de Adivinhação',
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://skillicons.dev/icons?i=angular&theme=light',
      'https://skillicons.dev/icons?i=ts&theme=light',
      'https://skillicons.dev/icons?i=rxjs&theme=light',
      'https://skillicons.dev/icons?i=eslint&theme=light',
      'https://skillicons.dev/icons?i=npm&theme=light',
    ],
    descricao: 'Aplicação Angular 20 com ESLint.',
  },
  {
    titulo: 'Pokédex',
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://skillicons.dev/icons?i=angular&theme=light',
      'https://skillicons.dev/icons?i=ts&theme=light',
      'https://skillicons.dev/icons?i=rxjs&theme=light',
      'https://skillicons.dev/icons?i=npm&theme=light',
    ],
    descricao: 'Aplicação Angular 20 com ESLint.',
  },
];
