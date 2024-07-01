Feature: Cadastrar Cliente
    Eu como usuário
    Quero preencher os dados do cadastro
    Para cadastrar os dados do cliente

    Scenario: Adicionar Dados do Cliente
        Given Estou na tela de cadastro
        When Clico em adicionar cliente
        When Digitar campos
        Then Salvo e verifico a mensagem
