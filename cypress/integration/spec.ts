/// <reference types="cypress" />
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('LocalCast Weather')
    cy.contains('Your City, your forecast, right now!')
  })
})
