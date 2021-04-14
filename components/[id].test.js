import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Character from "../pages/characters/[id]";
import {character} from './testData'

afterEach(cleanup);

describe("Character in [id].js", () => {
  it("Renders a CharacterBio component", () => {
    render(
      <Character character={character} />
    );
    
    const title = screen.queryByRole('heading', { name: /character bio/i })
    expect(title).toBeInTheDocument()
  });
});
