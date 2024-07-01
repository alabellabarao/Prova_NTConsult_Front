Feature: : Deletar Cliente
    Eu como usuário
    Quero preencher o campo Nome
    Para Deletar os dados do cliente


Scenario: Deletar Dados do Cliente
    Given Estou na tela de cadastro
    When Preencho o campo nome
    When Clico em delete
    Then Deleto e verifico a mensagem

