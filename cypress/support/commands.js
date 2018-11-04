Cypress.Commands.add('assertCadastro', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/cadastro`)
})

Cypress.Commands.add('assertEditar', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/editar`)
})

Cypress.Commands.add('assertLista', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/lista`)
})