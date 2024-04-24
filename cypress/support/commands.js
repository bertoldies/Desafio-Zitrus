Cypress.Commands.add('contato', function(){
    cy.get('#rd-text_field-lagu3sy8').type('Teste nome')
    cy.get('#rd-email_field-lagu3sy9').type('teste@teste.com')
    cy.get('#rd-text_field-lagu3sya').type('Empresa Teste')
    cy.get('#rd-checkbox_field-lagu3sye').click()

})

