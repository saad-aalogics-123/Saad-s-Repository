///<reference types="cypress"/>
describe ("suite 1",()=>
{
it("test case 1 ",()=>
{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //before click get control over prompt window to insert text   
    cy.get("a[href='/windows/new']").invoke("removeAttr","target").click()
   cy

})
})