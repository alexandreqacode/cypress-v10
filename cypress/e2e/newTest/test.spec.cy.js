const users = Cypress.env('USERS')
describe('login in saucedemo site', () => {
    it('should login as a standard user', () => {
        cy.Login(users['standard'])
    })
})
it('should login as a locked out user', () => {
    cy.Login(users['locked'])
})