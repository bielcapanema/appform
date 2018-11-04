import {
  userBuilder
} from '../support/generate'
import {
  baseUrl
} from '../../src/config'

describe('App test', () => {
  localStorage.removeItem('list')
  const user = userBuilder()
  it('works', () => {
    cy.server()
    cy.route(`${baseUrl}/users`).as('getUsers')

    cy.visit('/cadastro')
      .window().then((win) => {
        const xhr = new win.XMLHttpRequest
        xhr.open('GET', `${baseUrl}/users`)
        xhr.send()
      })
      .wait('@getUsers')
      .get('#name')
      .type(user.username, {
        force: true
      })
      .get('#email')
      .type(user.email, {
        force: true
      })
      .get('#cpf')
      .type('999.999.999-99', {
        force: true
      })
      .get('#phone')
      .type('(99) 99999-9999', {
        force: true
      })
      .get('#register-btn')
      .focus()
      .click()
      .visit('/lista')
      .getByText(new RegExp(user.username))
      .should('have.text', user.username)
  })
})