describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]') 
    const passwordInput = () => cy.get('input[name=password]')

    it('the proper elements are showing', () => {
        usernameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })
    it('can type in the inputs', () => {
        usernameInput()
            .should('have.value', '')
            .type('TomRiddle')
            .should('have.value', 'TomRiddle')
    })
})