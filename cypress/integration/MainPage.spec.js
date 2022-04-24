describe("renders the main directory page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".container-fluid").should("exist");
  });
});

describe("icons in the sort of table column are displayed correctly", () => {
  it("display the sort both ways icon initially", () => {
    cy.get("thead > tr > :nth-child(2) > :nth-child(1)").click();
    cy.get(".fa-sort").should("exist");
  });
  it("display the sort descending order icon on first click", () => {
    cy.get("thead > tr > :nth-child(2) > :nth-child(1)").click();
    cy.get(".fa-sort-desc").should("exist");
  });
  it("display the sort ascending order icon on second click", () => {
    cy.get("thead > tr > :nth-child(2) > :nth-child(1)").click();
  });
  it("again display the sort both ways icon on third click", () => {
    cy.get("thead > tr > :nth-child(2) > :nth-child(1)").click();
    cy.get(".fa-sort").should("exist");
  });
});
