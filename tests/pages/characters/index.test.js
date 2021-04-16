import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CharacterList, {getStaticProps} from "../../../pages/characters/index";
import {characters} from '../../testData'
import { act } from 'react-dom/test-utils';
jest.mock('../../../utils/apiCalls.js')

afterEach(cleanup);

describe("CharacterList in index.js", () => {
  localStorage.clear();

  it("Elements render properly", () => {
    act(() => {
      render(
        <CharacterList characters={characters}/>
      );
    })
    const callToAction = screen.queryByRole('heading', { name: /search by name above/i })
    const searchBar = screen.getByRole("textbox", {name: /character search bar/i});
    expect(callToAction).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });

  it("user query should pull up correct result", async () => {
    const mockedGetStaticProps = () => jest.isMockFunction(getStaticProps)
    mockedGetStaticProps(characters)

    act(() => {
      render(
        <MemoryRouter>
          <CharacterList characters={characters}/>
        </MemoryRouter>
      );
    })

    const searchBar = screen.getByRole("textbox", {name: /character search bar/i});
    await waitFor(() => userEvent.type((searchBar), 'Luke Skywalker'))
    
    await waitFor(async () => {
      const characterCard = screen.getByText('Luke Skywalker')
      await expect(characterCard).toBeInTheDocument()
    })   
  });

  it("partial query should pull up a list", async () => {
    act(() => {
      render(
        <MemoryRouter>
          <CharacterList characters={characters}/>
        </MemoryRouter>
      );
    })

    const searchBar = screen.getByRole("textbox", {name: /character search bar/i});
    await waitFor(() => userEvent.type((searchBar), 'l'))

    await waitFor(async () => {
      const characterCard1 = screen.getByText('Luke Skywalker')
      const characterCard2 = screen.getByText('Palpatine')
      const characterCard3 = screen.getByText('Lando Calrissian')
      const characterCard4 = screen.getByText('Beru Whitesun lars')
      const characterCard5 = screen.getByText('Biggs Darklighter')
      const characterCard6 = screen.getByText('Anakin Skywalker')
      const characterCard7 = screen.getByText('Wilhuff Tarkin')
      const characterCard8 = screen.getByText('Han Solo')
      const characterCard9 = screen.getByText('Jabba Desilijic Tiure')
      const characterCard10 = screen.getByText('Wedge Antilles')

      await expect(characterCard1).toBeInTheDocument()
      await expect(characterCard2).toBeInTheDocument()
      await expect(characterCard3).toBeInTheDocument()
      await expect(characterCard4).toBeInTheDocument()
      await expect(characterCard5).toBeInTheDocument()
      await expect(characterCard6).toBeInTheDocument()
      await expect(characterCard7).toBeInTheDocument()
      await expect(characterCard8).toBeInTheDocument()
      await expect(characterCard9).toBeInTheDocument()
      await expect(characterCard10).toBeInTheDocument()
    })   
  });
});
