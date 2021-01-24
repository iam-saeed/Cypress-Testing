describe('Name Input Field Test', function () {
    it('Checks to see if their is an input for name', function () {
        cy.get('input[name="firstName"]').should('have.placeholder', 'Name')
    })
})

describe('Email Input Checker', function () {
    it('checks to see if their is an email input', function () {
        cy.get("[type='email']")
        cy.get("[type='email']").type('myemail@domain.com')
    }) 
})

describe('Password Input Checker', function () {
    it('checks to see if their is an password input', function () {
        cy.get("[type='password']")
        cy.get("[type='password']").type('Hello123!')
    }) 
})

describe('Password Input Checker', function () {
    it('checks to see if their is an password input', function () {
        cy.get("[type='password']")
        cy.get("[type='password']").type('Hello123!')
    }) 
})
 