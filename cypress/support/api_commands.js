const accessToken = 'token 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'
const username = 'bertoldies'
const repo = 'Desafio_Zitrus'

Cypress.Commands.add('criar_repositorio', repositorio => {
    cy.request({
        method: 'POST',
        url: 'https://api.github.com/user/repos',
        body: {
            owner: repositorio.owner,
            name: repositorio.name,
            description: repositorio.description,
            private: false
        },
        headers: { Authorization: accessToken },
    })
})


Cypress.Commands.add('criar_issue', issue => {
    cy.request({
        method: 'POST',
        url: `https://api.github.com/repos/${username}/${repo}/issues`,
        body: {
           title: 'Zitrus'
        },
        headers: {
            Authorization: accessToken,
            'Content-Type': 'application/json'
            },
        
        })
    })  


        Cypress.Commands.add('excluir_repositorio', function() {
            cy.request({
                method: 'DELETE',
                url: `https://api.github.com/repos/${username}/${repo}`,
                headers: { 
                    Authorization: accessToken,
                    'Content-Type': 'application/json'
                 },
            })
        })


        