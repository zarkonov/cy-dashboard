describe('Select box', () => {
    it('should pick a value on the slider', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tries-test-cafe'). click()
        cy.contains('5').click()
    })
})