/// <reference types= "cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import acessar_Home from "../pages/acessar_Home"
import adicionar_Cliente from "../pages/adicionar_Cliente"
import digitar_Campos from "../pages/digitar_Campos"
import salvar_Mensagem from "../pages/salvar_Mensagem"
import selecionar_Nome from "../pages/selecionar_Nome"
import clicar_Delete from "../pages/clicar_Delete"
import clicar_BotaoDelete from "../pages/clicar_BotaoDelete"


Given("Estou na tela de cadastro",() => {
    acessar_Home.acessar_Home()
})

When("Clico em adicionar cliente", () => {
    adicionar_Cliente.adicionar_Cliente() 
})

When("Digitar campos", () => {
    digitar_Campos.digitar_Campos() 
})

Then("Salvo e verifico a mensagem",() => {
    salvar_Mensagem.salvar_Mensagem()
})

When('Preencho o campo nome',() => {
    selecionar_Nome.selecionar_Nome()
})

When('Clico em delete', () => {
    clicar_Delete.clicar_Delete()
})

Then ('Deleto e verifico a mensagem',()=> {
    clicar_BotaoDelete.clicar_BotaoDelete()

})