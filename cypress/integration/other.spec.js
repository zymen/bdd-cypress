describe("test", () => {
    beforeEach(() => {
        cy.visit("https://google.com")
    })

    it('should return some results', function () {
        cy.get("#L2AGLb > .jyfHyd").click()
        cy.get(".gLFyf").type("sample")
        cy.get(".FPdoLc > center > .gNO89b").click()

        cy.get("#result-stats").should("contain", "Około")
    });

})