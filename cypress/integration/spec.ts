
describe('Init Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('LocalCast Weather')
    cy.contains('Your city, your forecast, right now!')
  })
})

describe('Test search field if inputs are invalid', () => {
  it('Shows error message when only a single character inserted to search field', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().type('H')
    cy.get('input').first().blur()
    // Type more than one character to search
    cy.contains('Type more than one character to search')
  })

  it('Shows error message when no character inserted to search field', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().blur()
    // Type more than one character to search
    cy.contains('Type more than one character to search')
  })
})


describe('Test search field when inputs are valid', () => {
  it('Shows Greater London when searched by uk zip code (SW1W 0NY)', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().type('SW1W 0NY')
    cy.get('input').first().blur()
    cy.contains('Greater London, GB')
  })
  it('Shows US when searched by us zip code (90210)', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().type('90210')
    cy.get('input').first().blur()
    cy.contains('Beverly Hills, US')
  })

  it('Shows Paris weather when searched by its city name', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().type('paris')
    cy.get('input').first().blur()
    cy.contains('Paris')
  })

  it('Shows results when searched by its city name and country code', () => {
    cy.visit('/')
    cy.get('input').first().focus()
    cy.get('input').first().type('jakarta,id')
    cy.get('input').first().blur()
    cy.contains('Jakarta, ID')
  })

})