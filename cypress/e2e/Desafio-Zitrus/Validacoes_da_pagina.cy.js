/// <reference types="Cypress" />

describe('Realizar testes automatizados para o desafio Zitrus', () => {

    beforeEach(function () {
        cy.visit('https://zitrus.com.br/')
    })


    it('validar titulo da pagina', () => {
        cy.title().should('be.equal', "Sistemas de Gestão de Planos de Saúde Unimed - Zitrus - Healthtech")

    })

    it('preenche os campos obrigatórios e envia o formulário de contato', function () {
        cy.intercept('https://zitrus.com.br/contato/').as('formulario')
        cy.get('a[href="/contato"]').click()
        cy.wait('@formulario')
        cy.contato()
        cy.get('#rd-checkbox_field-lagu3sye').check()
        cy.get('#rd-button-kruzaryr').click()
        cy.get('input[name="thankyou_message"]').should('have.value', 'Obrigada. Sua mensagem foi enviada!')


    })

    it('Clicar em enviar no formulario de contato sem preencher os campos', function () {
        cy.intercept('https://zitrus.com.br/contato/').as('formulario')
        cy.get('a[href="/contato"]').click()
        cy.wait('@formulario')
        cy.get('#rd-button-kruzaryr').click()
        cy.contains('.error', 'Campo obrigatório').should('be.visible')


    })

    it('Verificar se button_link "sobre", funciona corretamente', function () {
        cy.intercept('https://zitrus.com.br/sobre/').as('paginasobre')
        cy.get('.elementor-menu-toggle__icon--open').click()
        cy.get('#menu-2-d6cf617 > .menu-item-3350 > .elementor-item').click()
        cy.wait('@paginasobre')
        cy.url().should('eq', 'https://zitrus.com.br/sobre/');

    })

})
