// import React from 'react'
import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CharacterCard from './CharacterCard'
import {character} from './testData'

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