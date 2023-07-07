describe('template spec', () => {
  it('passes', () => {
<<<<<<< HEAD
    cy.visit('http://localhost:5173/')
=======
    cy.visit('localhost:5173/')
>>>>>>> 1b34045 (Change cy.visit)
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('Test 123')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-text"]').contains('Test 123')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'Test 123') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})