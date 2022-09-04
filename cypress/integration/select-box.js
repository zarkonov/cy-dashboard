describe('Select box', () => {
    it('should pick an option from select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface'). select('JavaScript API')//select JavaScript API option from drop down menu
        cy.get('#preffered-interface').should('have.value', 'JavaScript API' )//checks if the choice from dropdown menu is the one we wanted
        cy.get('#submit-button').click()
        cy.get('#article-header').contains('Thank you')//grabs title from h1 when inspected
    })
})