describe("suite",()=>

{
it("test 1",()=>
{
    cy.wait(1000)
cy.visit("https://test.imarkplace.com/")
cy.wait(1000)
cy.get('.header-content-action > :nth-child(3) > .mbi').click()
cy.get("a[href='https://test.imarkplace.com/jackets/customer/account/login/']").click()
cy.wait(1000)

})

})