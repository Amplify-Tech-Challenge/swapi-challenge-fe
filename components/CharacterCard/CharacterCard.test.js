import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterCard from './CharacterCard'
import {character} from '../../tests/components/testData'

afterEach(cleanup);

describe("CharacterCard", () => {
  it("Elements render properly", () => {
    render(
      <CharacterCard character={character} />
    );

    const card = screen.getByRole('link', { name: /luke skywalker a photo of luke skywalker/i })
    expect(card).toBeInTheDocument();
  });
});