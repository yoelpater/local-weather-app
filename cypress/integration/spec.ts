
describe('Main Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('LocalCast Weather')
    cy.contains('Your city, your forecast, right now!')
  })
})
