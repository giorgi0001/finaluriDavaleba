//test case: Login User with incorrect email and password


describe('template spec', () => {
  before(function () {
    cy.fixture('invalidUser.json').as('invalidData') 
  })
  it(' Login User with incorrect email and password', function ()  {
    cy.loginWithInvalidCredentials(this.invalidData.invalidEmail, this.invalidData.invalidPassword)
    
  })
})