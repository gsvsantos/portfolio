import { ItemProjeto } from '../models/item-projetos';

export const itensProjetos: ItemProjeto[] = [
  {
    titulo: 'Valet WebAPI',
    urlImagem: '',
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
    titulo: 'Valet Angular',
    urlImagem: 'https://placehold.co/1200x800?text=Em Desenvolvimento',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      // 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', <- logo mais será implementado
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
    ],
    descricao: `Meu projeto atual, um front-end em Angular para consumir a API multi-tenant. Focado em Formulários Reativos e HttpClient/Interceptors.`,
    tipo: 'itemProjeto',
  },
  {
    titulo: 'Gerador de Testes',
    urlImagem: '',
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
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
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
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
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
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
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
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
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
    urlImagem: 'https://placehold.co/1200x800?text=Screenshot+indispon%C3%ADvel',
    urlGif: '',
    urlRepositorio: '',
    stack: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      // 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', <- logo mais será implementado
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
    ],
    descricao: 'Aplicação Angular 20 com ESLint.',
    tipo: 'itemProjeto',
  },
];
