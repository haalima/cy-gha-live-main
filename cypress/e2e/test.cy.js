describe(" Executer Cypress sur Github Actions ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(" un titre contenant Bienvenue ! ", () => {
    cy.contains("h1", "Bienvenue !").should("be.visible");
  });
  it(" un lien contenant  Automation Tester Academy", () => {
    cy.contains("a", "Automation Tester Academy")
      .should("be.visible")
      .and("have.attr", "target", "_blank");
  });
  it(" un bouton actif contenant Bouton de test ", () => {
    cy.get("button#main_button")
      .should("contain", "Bouton de test")
      .and("be.visible")
      .and("be.enabled");
  });
});
