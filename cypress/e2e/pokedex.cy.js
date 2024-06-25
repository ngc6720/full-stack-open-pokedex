const PORT = 3000;

describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:" + PORT);
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("pokemon page can be opened", function () {
    cy.visit("http://localhost:" + PORT);
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
});
