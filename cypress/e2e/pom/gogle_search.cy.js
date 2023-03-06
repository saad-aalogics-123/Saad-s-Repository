export class google_search_class
{
visit_site()
{
    cy.visit("https://www.google.com/")
}
type_keyword()
{
    cy.get("input[name='q']").type("cypress automation ")
}
keyword_verification()
{
    cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').contains("cypress automation").click()
}
}