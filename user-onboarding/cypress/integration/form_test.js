describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]') 
    const passwordInput = () => cy.get('input[name=password]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
    })

})