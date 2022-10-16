const users = Cypress.env('USERS')
describe('second login in saucedemo site', () => {
  it('should login as a standard user', () => {
    cy.Login(users['standard'])
  })
})
it('should login as a locked out user', () => {
  cy.Login(users['locked'])
})
it('should login as a problem user', () => {
  cy.Login(users['problem'])
})
it('should login as a performance glitch user', () => {
  cy.Login(users['glitch'])
})