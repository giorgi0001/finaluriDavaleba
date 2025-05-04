Cypress.Commands.add('registration', (first_name,email,password) => {
    cy.visit('https://testzootopia.loremipsum.ge/')


// 1. Launch browser
// 2. Navigate to url 'https://testzootopia.loremipsum.ge/'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup' button
cy.get('.rprof > p').click()
// 5. Verify 'registration' is visible
cy.get('.input-shablon > p > a').should('be.visible')
// 6. click on 'registration' button
cy.get('.input-shablon > p > a').click()
// 7. Verify that txt 'registration' is visible
cy.get('.bred > :nth-child(2) > a').should('be.visible')
// 8. enter email, name and password
cy.get(':nth-child(1) > .ismile').type(first_name)
cy.get(':nth-child(2) > .imail').type(email)
cy.get(':nth-child(5) > .ipass').type(password)
// 9. enter ID number
cy.get('.ipir').type('13567890')
// 10. type phone number
cy.get(':nth-child(4) > .itel').type('555444444')
// 11. confirm "paassword"
cy.get('.reg-form-left > :nth-child(6) > .ipass').type(password)
// 12. verify that 'I accept the terms of service' is visible
cy.get('.etx > p').should('be.visible')
cy.get('input[type="checkbox"]').check({ force: true })
// 13. Click 'Register' button
cy.get('.regsub').click()
// 14. click 'GO HOME' button

// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible

 
})




Cypress.Commands.add('login', (email,password) => {
    cy.visit('https://testzootopia.loremipsum.ge/')
//     1. Launch browser
// 2. Navigate to url 'https://testzootopia.loremipsum.ge/'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.rprof > p').click()
// 5. Verify 'Login" is visible
cy.get('.avtorization > .input-shablon > .form-button').should('be.visible')
// 6. Enter correct email address and password
cy.get(':nth-child(5) > .imail').type(email)
cy.get('.ipass').type(password)
// 7. Click 'login' button
cy.get('.avtorization > .input-shablon > .form-button').click()
// 8. Verify that you are logged in successfully
cy.get('.menu-pop > .iprof').should('be.visible')
})



Cypress.Commands.add('addProductToCart', (email,password) => {
    cy.visit('https://testzootopia.loremipsum.ge/')
  // 1. Launch browser
// 2. Navigate to url 'https://testzootopia.loremipsum.ge/'
// 3. Verify that home page is visible successfully
    cy.login(email, password)
    cy.wait(1000)
  
  // 5. choose product and click 'Add to cart'
cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
// 6. click 'View Cart' button
cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
// 7. Verify that you are on 'Cart' page
cy.get('.bred > :nth-child(2) > a').should('be.visible')
// 8. Verify that 'Product successfully added to your cart'
 cy.get('.cart-item').should('have.length.at.least', 1)
  
   
})





Cypress.Commands.add('addProductToCartAndIncreaseQuantity', (email, password) => {
    cy.visit('https://testzootopia.loremipsum.ge/')
  // 1. Launch browser
// 2. Navigate to url 'https://testzootopia.loremipsum.ge/'
// 3. Verify that home page is visible successfully
    cy.login(email, password)
    cy.wait(1000)
  
  // 5. choose product and click 'Add to cart'
cy.get(':nth-child(7) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
 // 6. click 'View Cart' button
cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
 // 7. Verify that you are on 'Cart' page
 cy.get('.bred > :nth-child(2) > a').should('be.visible')
//  8. Verify that 'Product successfully added to your cart'
cy.get('.cart-item').should('have.length.at.least', 1)
// 9. Increase the product quantity
cy.get('.plus').click().click()
// Check that the quantity has been updated
cy.get('.spinner > input').should('have.value', '3')
// Verify the updated cart price
cy.get('.price-p').should('be.visible')
})






Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
cy.visit('https://testzootopia.loremipsum.ge/')
//1.click on 'Signup  button'
cy.get('.menu-pop > .rprof').click()
//2. avtorization is visible
cy.get('.avtorization > .input-shablon > h2').should('be.visible')

 // 3. Fill in invalid email and password
 cy.get(':nth-child(5) > .imail').type(email)
 cy.get('.ipass').type(password)
// 4. Click 'Login' button
cy.get('.avtorization > .input-shablon > .form-button').click()
// 5. Verify that 'Invalid email or password' message is visible
cy.get('.input-div.alert > .alert > img').should('be.visible')
}) 

