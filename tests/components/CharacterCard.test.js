import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import {character} from '../testData'

afterEach(cleanup);

describe("CharacterCard", () => {
  it("Elements render properly", () => {
    render(
      <CharacterCard character={character} />
    );

    const characterCard = screen.getByText('Luke Skywalker')
    expect(characterCard).toBeInTheDocument();
  });
});