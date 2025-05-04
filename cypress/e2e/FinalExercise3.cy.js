// Test Case: should login and add product to cart successfully


describe('template spec', () => {
  before(function () {
    cy.fixture('myNew.json').as('userData')
  })
  it('should login and add product to cart successfully', function () {
    cy.visit('https://testzootopia.loremipsum.ge/') 
    cy.addProductToCart(this.userData.email, this.userData.password)
  })
})