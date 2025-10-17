import { ItemProjeto } from '../models/item-projetos';

export const itensProjetos: ItemProjeto[] = [
  {
    titulo: 'Valet WebAPI',
    urlImagem: 'https://i.imgur.com/NxVXC5I.png',
    urlGif: 'https://i.imgur.com/tIFABjc.gif',
    urlRepositorio: 'https://github.com/gsvsantos/GestaoDeEstacionamento-WebAPI',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
    ],
    descricao:
      'Web API em .NET 8 com MediatR, AutoMapper, FluentValidation, versionamento de API, cache Redis e Swagger. Projeto com Testcontainers (175 testes em C#), Docker (Dockerfile + docker-compose) e CI via GitHub Actions. Pacotes de Identity/JWT presentes.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Claquete',
    urlImagem: 'https://i.imgur.com/MYdlQKT.png',
    urlGif: 'https://i.imgur.com/1Saz79B.gif',
    urlRepositorio: 'https://github.com/gsvsantos/claquete',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prettier/prettier-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
    ],
    descricao:
      'Aplicação Angular 20 para catálogo TMDB com Router + guard de verificação da API Key, busca reativa (Reactive Forms), i18n (Transloco: en-US, pt-BR, es-ES), favoritos em LocalStorage, carrosséis com diretiva [clqt-hover-scroll] e toasts (ngx-toastr). Qualidade e tooling: SCSS modular, ESLint + Prettier, bootstrap-icons e gs-buttons; integração TMDb (service, models, pipe) e deploy via angular-cli-ghpages.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Gerador de Testes',
    urlImagem: 'https://i.imgur.com/o2s0WaV.png',
    urlGif: 'https://i.imgur.com/eKoM8DM.gif',
    urlRepositorio: 'https://github.com/gsvsantos/GeradorDeTestes',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
    ],
    descricao:
      'API ASP.NET Core que gera PDFs (QuestPDF) com logs estruturados em Serilog. Usa EF Core para SQL Server e PostgreSQL; pacotes de Identity + JwtBearer; suíte de testes com MSTest, Moq e Testcontainers; Dockerfile e pipeline no GitHub Actions.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Controle de Cinema',
    urlImagem: 'https://i.imgur.com/Ng0MuAs.png',
    urlGif: 'https://i.imgur.com/m2VCvJN.gif',
    urlRepositorio: 'https://github.com/gsvsantos/ControleDeCinema',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
    ],
    descricao:
      'ASP.NET Core com EF Core (PostgreSQL), pacotes de Identity/JwtBearer e Serilog. Possui Selenium WebDriver/Support, 162 testes C#, Dockerfile e 2 workflows de GitHub Actions.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'eAgenda',
    urlImagem: 'https://i.imgur.com/8NFlJZu.png',
    urlGif: 'https://i.imgur.com/AjTFnSW.gif',
    urlRepositorio: 'https://github.com/gsvsantos/eAgenda',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    ],
    descricao:
      'ASP.NET Core com EF Core (SqlServer e PostgreSQL) e Serilog. Repositório com workflow de GitHub Actions.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Controle de Medicamentos',
    urlImagem: 'https://i.imgur.com/L7bAsUh.png',
    urlGif: 'https://i.imgur.com/7gGLPvq.gif',
    urlRepositorio: 'https://github.com/gsvsantos/ControleDeMedicamentos/tree/aspnet',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    ],
    descricao: 'ASP.NET Core que trabalha com CSV (CsvHelper) e geração de PDFs (iTextSharp).',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Jogo de Adivinhação',
    urlImagem: 'https://i.imgur.com/oxK3tWk.png',
    urlGif: 'https://i.imgur.com/euUs6Bo.gif',
    urlRepositorio: 'https://github.com/gsvsantos/JogoDeAdivinhacao.TypeScript',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      // 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', <- logo mais será implementado
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
    ],
    descricao: 'Aplicação Angular 20 com ESLint.',
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Pokédex',
    urlImagem: 'https://i.imgur.com/3ZMI43u.png',
    urlGif: 'https://i.imgur.com/iI2oDiZ.gif',
    urlRepositorio: 'https://github.com/gsvsantos/pokedex',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
    ],
    descricao: 'Aplicação Angular 20 com ESLint.',
    tipo: 'itemProjeto',
  },
];
