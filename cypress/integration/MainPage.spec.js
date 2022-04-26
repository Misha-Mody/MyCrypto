describe("renders the main directory page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".container-fluid").should("exist");
  });
});

describe("icons in the sort of table column are displayed correctly", () => {
  it("display the sort both ways icon initially", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort-asc").should("exist");
  });

  it("display the sort asc icon on first click", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort-asc").should("exist");
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
  });

  it("again display the sort both ways icon on third click", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort").should("exist");
  });
});
