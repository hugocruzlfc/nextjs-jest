import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PokemonPage from "@/app/pokemon/page";

describe("Pokemon page test", () => {
  it("RSC Page", async () => {
    render(await PokemonPage());

    expect(await screen.findByText("bulbasaur")).toBeDefined();
  });
});
