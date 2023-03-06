describe('template spec', () => 
{

  it('passes', () => {
   cy.visit("http://webdriveruniversity.com/File-Upload/index.html")
   cy.get("#myFile").attachFile("test1.pdf")
   cy.get("#submit-button").click()
   cy.on("window:alert",(t)=>
   {
expect(t).to.contain("Your file has now been uploaded!")
   })

  })
})