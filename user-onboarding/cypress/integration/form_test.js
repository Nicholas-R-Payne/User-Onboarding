describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]') 
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckbox = () => cy.get('input[name=tos]')
    const createBtn = () => cy.get('input[value="Create a Friend"]')

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
    it('can submit the form data', () => {
        usernameInput().type('TomRiddle')
        emailInput().type('lordvoldemort1@gmail.com')
        passwordInput().type('snapekilleddumbledore')
        tosCheckbox().check()
        createBtn().click()
        const newFriend = () => cy.contains('p', 'lordvoldemort1@gmail.com')
        newFriend().should('exist')
    })
    it('shows any validation errors', () => {
        usernameInput().type('T')
        emailInput().type('l')
        passwordInput().type('s')
        tosCheckbox().check()
        tosCheckbox().uncheck()
        cy.contains('Username must be at least 3 characters long!').should('exist')
        cy.contains('Must be a valid email address!').should('exist')
        cy.contains('Password must be at least 6 characters long!').should('exist')
        cy.contains('Must accept the terms of service!').should('exist')
    })
})