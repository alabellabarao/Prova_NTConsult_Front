<body>
  <div class="center-container">
    <h1 class="title">Automação do Projeto Sigma</h1>
  </div>
  <div>
    <h4 class="subtitle">1 - Ferramentas/Linguagens que está sendo utilizada para automação do Projeto Sigma:</h4>
       <ul class="sublist">
            <li>Node.Js e JavaScript</li>
            <li>Visual Studio Code</li>
            <li>Cypress</li>
        </ul>

 <h4 class="subtitle">2 - Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript.</h4>
  <h4 class="subtitle">Passos para instalar o Node.js:</h4>
    <ul class="sublist">      
      <li>Ir para o google e digitar "install node"</li>
      <li>Escolher o link node.org e baixar o Node conforme o sistema operacional que está utilizando</li>
      <li>Link para baixar: <a href="https://nodejs.org/en/download/package-manager">https://nodejs.org/en/download/package-manager</a></li>
      <li>Comando a seguir mostra se o Node foi instalado e a versão, rodar o comando: "node -v"</li>
      <li>Ir no GitBash (executar como administrador)</li>
      <li>Para iniciar o gerenciador de pacote do Node, digite o comando: npm init -y</li>
      <li>Cria o arquivo package.json, que contém as dependências do projeto</li>
  </ul>

<h4 class="subtitle">3 - Visual Studio Code é a IDE que será utilizado para editar os códigos dos testes automatizados.
    </h4>
<h4 class="subtitle">Passos para instalar o Visual Studio Code:</h4>
    <ul class="sublist">
        <li>Ir no google e digitar "install Vs Code"</li>
        <li>Escolher o link referente a Download Visual Sudio Code e baixar o Vs Code conforme o sistema operacional que está utilizando</li>
        <li>Link para baixar: <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a></li>
      <li>Instalar o Vs Code</li>
        <li>Instalar o Vs Code</li>
        <li>Para abrir o Vs Code, basta ir no cmd e digitar "code ."</li>
    </ul>
<h4 class="subtitle">4 - Cypress é um framework utilizado para automatizar testes de aplicação web</h4>
<h4 class="subtitle">Passos para instalar o Cypress:</h4>
    <ul class="sublist">        
        <li>Ir no GitBash (executar como administrador)</li>
        <li>Para instalar o Cypress localmente, executar os comandos: "npm install cypress" e "npx cypress install". Caso mostre a mensagem: "Pass the --force option if you'd like to reinstall anyway.", rode o comando npx "cypress install --force"<br><br><strong>** Essa mensagem é mostrada por que já tem uma instalação do Cypress em outro local, então ao rodar o comando acima, para força a instalação para o novo projeto.</strong></li>
        <li>Verificar se o Cypress foi instalado, utilizando o comando: npx cypress verify</li>
    </ul>
    <h4 class="subtitle">5 - Automação referente ao Projeto Sigma. Escrever código fonte para automação de teste de “recuperação de senha”. Sendo que o teste deve conter a seguinte estrutura:</h4>

    </body>
</html>
Instalar o node.js

Digitar o comando para iniciar o Node:
npm init -y

Fazer a instalação dos pacotes do Cypress
npm install cypress

Abre a pasta que o usuário está, abrindo o Vs Code:
code. 

Iniciar o Cypress
npx cypress install --force

Verificar se o cypress foi instalado:
npx cypress verify

Abrir o cypress
npx cypress open

Escolher a opção E2E Testing

Cria os arquivos de configurações
Clicar no botão Continue

Escolher o Browser Chrome
Clicar no botão Start



**** Instalar o BDD ****
Instalar conforme o documento:
docs.cypress.io

Clicar em plugins
	Cucumber
		Preprocessor
			cypress-cucumber-preprocessor
				Clicar em Quick star

Instalar o comando abaixo:
	npm install @badeball/cypress-cucumber-preprocessor
	npm install --save-dev cypress-cucumber-preprocessor

Verificar se foi instalado:
	npm list cypress-cucumber-preprocessor

Colar o comando "specPattern" dentro do e2e, onde os arquivos com extensão .feature:
	specPattern: "cypress/e2e/features/*.feature",

Incluir os imports no arquivo cypress.config.js, onde tem a constante (const)
	import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
	import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
	import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

Alterar para:

	const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
	const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
	const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");

Incluir também:
const cucumber = require('cypress-cucumber-preprocessor').default


Instalar o "@bahmutov/cypress-esbuild-preprocessor" (que ainda não foi instalado)
	npm install @bahmutov/cypress-esbuild-preprocessor

Copiar o "addCucumberPreprocessorPlugin(on, config);" e "on('file:preprocessor', cucumber())" abaixo do setupNodeEvents:

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme',
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', cucumber())

....

Copiar as seguintes linhas, abaixo do comando digitado no passo acima:

 on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;

Para organizar o projeto em BDD, usar a seguinte estrutura:
Na pasta cypress, criar uma pasta e2e e dentro dessa pasta, criar a pasta features:
cypress/e2e/features

Na pasta suport, criar a pasta pages e step_definitions

*************************************************************************************

Configurar a URL que será utilizada para fazer a automação

Ir no arquivo "cypress.config.js" e incluir a seguinte linha:
Incluir dentro do "e2e: {", a linha:
    baseUrl: 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme',

*************************************************************************************
