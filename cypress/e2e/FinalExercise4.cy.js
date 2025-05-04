// test case : should login, add product to cart, and increase quantity

describe('Add Product to Cart and Increase Quantity', () => {
  before(function () {
    cy.fixture('myNew.json').as('userData')
  })

  it('should login, add product to cart, and increase quantity', function () {
    cy.visit('https://testzootopia.loremipsum.ge/') 
    cy.addProductToCartAndIncreaseQuantity(this.userData.email, this.userData.password)
  })
})