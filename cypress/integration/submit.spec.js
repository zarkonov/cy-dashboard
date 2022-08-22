describe('Submit Form', () => {
    it('should fill and submit developer name', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#developer-name'). type('mike')
        cy.get('#tried-test-cafe').click()
        cy.get('#submit-button').click()
        cy.get('#article-header').contains('Thank you')//grabs title from h1 when inspected
    })
})