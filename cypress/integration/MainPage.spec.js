describe("renders the main directory page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".container-fluid").should("exist");
  });
});

describe("icons in the sort of table column are displayed correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display the sort both ways icon initially", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort-asc").should("exist");
  });

  it("display the sort asc icon on first click", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort-asc").should("exist");
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
  });

  it("display the sort desc icon on second click", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
  });

  it("again display the sort both ways icon on third click", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .fa").click({ force: true });
    cy.get(".fa-sort").should("exist");
  });
});

describe("check if navigation between the 2 pages works", () => {
  it("check if clicking on coin link goes to coin page", () => {
    cy.visit("/");
    cy.get(":nth-child(1) > :nth-child(2) > .sticky > a > span").click({
      force: true,
    });
    cy.location("pathname").should("include", "coin");
  });

  it("check if clicking on home page takes you back to home page", () => {
    cy.get("a").click({ force: true });
    cy.location("pathname").should("not.include", "coin");
  });
});
