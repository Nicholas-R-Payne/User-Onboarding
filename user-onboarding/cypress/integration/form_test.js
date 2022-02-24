describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]') 
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckbox = () => cy.get('checkbox[name=tos]')

    it('can type in the inputs', () => {
        usernameInput()
            .should('have.value', '')
            .type('TomRiddle')
            .should('have.value', 'TomRiddle')
        emailInput()
            .should('have.value', '')
            .type('lordvoldemort1@gmail.com')
            .should('have.value', 'lordvoldemort1@gmail.com')
        passwordInput()
            .should('have.value', '')
            .type('snapekilleddumbledore')
            .should('have.value', 'snapekilleddumbledore')
        
    })
})