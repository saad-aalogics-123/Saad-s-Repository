import { google_search_class } from "./pom/gogle_search.cy"

describe("suite1",()=>

{ 
it("test 1",()=>
{
    const lz=new google_search_class()
lz.visit_site()
lz.type_keyword()
cy.get(".UUbT9").each(($el,index,$limit)=>
{
if($el.text()=="cypress automation toool")
{cy.wrap($el).click()}
})

})



})