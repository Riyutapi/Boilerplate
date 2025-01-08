<h1>Boilerplate Typescript/NodeJs e SCSS</h1>

<p>Este projeto foi desenvolvido como parte do <strong>Curso de Javascript + Typescript + NodeJs</strong>, ministrado por <strong>Dener Troquatte</strong>, disponível na plataforma <strong>Udemy</strong>.</p>

<h2>O que é um Boilerplate?</h2>
<p>Um boilerplate é uma estrutura básica e reutilizável de código, criada para servir como ponto de partida para novos projetos. Ele já vem pré-configurado com ferramentas, bibliotecas e configurações essenciais, economizando tempo e evitando a necessidade de configurar tudo do zero. Este boilerplate foi projetado para projetos que utilizam <strong>TypeScript/NodeJs</strong> e <strong>SCSS</strong></p>

<h2>Pré-requisitos</h2>
<p>Certifique-se de ter o <strong>Node.js</strong> e o <strong>npm</strong> instalados no seu ambiente.</p>

<h2>Instalação</h2>
<p>Clone este repositório e instale as dependências:</p>

<pre>
<code>
# Instale as dependências
npm install
</code>
</pre>

<h2>Como executar o projeto</h2>
<p>Após instalar as dependências, você pode rodar o projeto com o comando:</p>

<pre>
<code>
npm start
</code>
</pre>

<h2>Tecnologias utilizadas</h2>
<ul>
  <li><strong>Node.js</strong> - Ambiente de execução para JavaScript no servidor.</li>
  <li><strong>TypeScript</strong> - Superconjunto de JavaScript que adiciona tipagem estática.</li>
</ul>

<h2>Estrutura do Projeto</h2>
<pre>
<code>
boilerplate/
└── src/                           # Código fonte do projeto
    ├── controller/                # Pasta para os controladores
    │   └── generate.controller.ts # Geração da pasta do boilerplate
    │
    ├── enum/                      # Pasta para definições de enums
    │   ├── choice.enum.ts         # Tipos de boilerplate
    │   ├── erros.enum.ts          # Tipos de erros ao nomear a pasta
    │   └── gitName.enum.ts        # Nomes dos repositórios para clonar
    │
    ├── interface/                 # Pasta para interfaces
    │   └── res.interface.ts       # Respostas do usuário no terminal
    │
    ├── questions.ts               # Perguntas feitas no terminal
    └── index.ts                   # Arquivo principal do projeto

</code>
</pre>

<h2>Sobre o curso</h2>
<p>Este projeto foi desenvolvido como parte de um curso que explora desde os fundamentos até conceitos avançados de <strong>JavaScript</strong>, <strong>TypeScript</strong> e <strong>NodeJs</strong>, oferecendo uma visão prática e detalhada dessas tecnologias.