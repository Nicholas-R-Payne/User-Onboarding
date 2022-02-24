describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]') 
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckbox = () => cy.get('input[name=tos]')

    it('can type in username input', () => {
        usernameInput()
            .should('have.value', '')
            .type('TomRiddle')
            .should('have.value', 'TomRiddle')
    })
    it('can type in email input', () => {
        emailInput()
            .should('have.value', '')
            .type('lordvoldemort1@gmail.com')
            .should('have.value', 'lordvoldemort1@gmail.com')
    })
    it('can type in password input', () => {
        passwordInput()
            .should('have.value', '')
            .type('snapekilleddumbledore')
            .should('have.value', 'snapekilleddumbledore')
    })
    it('can check tos checkbox', () => {
        tosCheckbox()
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })
})