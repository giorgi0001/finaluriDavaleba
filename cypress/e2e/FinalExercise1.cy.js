//  Test Case: Register User

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('template spec', () => {
  before(function () {
    cy.fixture('myNew.json').as('userData')
  })
  it('register user',function () {
    cy.visit('https://testzootopia.loremipsum.ge/')
    
    cy.registration(this.userData.first_name, this.userData.email, this.userData.password)
  })
})