<body>
  <div class="center-container">
    <h1 class="title">Automação do Projeto NT Consult</h1>
  </div>
  <div>
    <h4 class="subtitle">1 - Ferramentas/Linguagens que está sendo utilizada para automação do Projeto NT Consult:</h4>
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
        <li>Para abrir o Vs Code, basta ir no cmd e digitar "code ."</li>
    </ul>
<h4 class="subtitle">4 - Cypress é um framework utilizado para automatizar testes de aplicação web</h4>
<h4 class="subtitle">Passos para instalar o Cypress:</h4>
    <ul class="sublist">        
        <li>Ir no GitBash (executar como administrador)</li>
        <li>Para instalar o Cypress localmente, executar os comandos: "npm install cypress" e "npx cypress install". Caso mostre a mensagem: "Pass the --force option if you'd like to reinstall anyway.", rode o comando npx "cypress install --force"<br><br><strong>** Essa mensagem é mostrada por que já tem uma instalação do Cypress em outro local, então ao rodar o comando acima, para força a instalação para o novo projeto.</strong></li>
        <li>Verificar se o Cypress foi instalado, utilizando o comando: npx cypress verify</li>
    </ul>
  <h3 class="subtitle">5 - Automação referente ao Projeto NT Consult, Escrever o Cenário 1 para Cadastro de cliente e Cenário 2 para Deletar o cliente cadastrado. </h3>

     <h2>Critérios Técnicos Específicos Automação de Testes Front-End:</h2>
  <ul>
    <li>Utilizar BDD</li>
    <li>Utilizar pelo menos um destes navegadores: Chrome ou Firefox</li>
    <li>Criar relatório da execução dos testes. Ter screenshots é um plus no relatório</li>
    <li>Uso dos locators (PageFactory e PageObject)</li>
  </ul>

   <h3>Cenário 1: Adicionar cliente</h3>
   <h2>Passos para Teste Automatizado</h2>
  <ol>
    <li>Acessar a página <a href="https://www.grocerycrud.com/v1.x/demo/bootstrap_theme" target="_blank">https://www.grocerycrud.com/v1.x/demo/bootstrap_theme</a></li>
    <li>Mudar o valor da combo Select version para “Bootstrap V4 Theme”</li>
    <li>Clicar no botão Add Customer</li>
    <li>Preencher os campos do formulário com dados fakes</li>
    <li>Clicar no botão Save</li>
    <li>Validar a mensagem “Your data has been successfully stored into the database. Edit Customer or Go back to list” através de uma asserção</li>
    <li>Fechar o browser</li>
  </ol>

   <h2>Critérios Técnicos Específicos Automação de Testes Back-End:s</h2>
  <ul>
    <li>Utilizar, de preferência: Java 11+</li>
    <li>Utilizar BDD é facultativo</li>
    <li>Criar relatório da execução dos testes. Ter screenshots é um plus no relatório</li>
    <li>Passar os testes em quality gate (SonarQube) e exibir boas práticas de testes de qualidade em forma de métricas no relatório (diferencial)</li>
  </ul>
    </body>
</html>
