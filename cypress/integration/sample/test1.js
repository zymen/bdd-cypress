import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('anonymous user is on main page', () => {
    cy.visit("https://google.com")
    cy.get("#L2AGLb > .jyfHyd").click()
})

When(/^he puts "([^"]*)" into search$/, (word) => {
    cy.get(".gLFyf").type(word)
})

And('he clicks search button', () => {
    cy.get(".FPdoLc > center > .gNO89b").click()
})

Then("he should receive some results", () => {
    cy.get("#result-stats").should("contain", "Około")
})

Then(/^title should be "([^"]*)"$/, function (word) {
    cy.title().should("contain", word)
});