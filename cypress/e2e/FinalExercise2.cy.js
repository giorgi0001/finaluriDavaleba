// login user with correct email and password

describe('template spec', () => {
  before(function () {
    cy.fixture('myNew.json').as('userData')
  })
  it.only('login user with correct email and password',function ()  {
    cy.visit('https://testzootopia.loremipsum.ge/')
    cy.login(this.userData.email, this.userData.password)
  })
})