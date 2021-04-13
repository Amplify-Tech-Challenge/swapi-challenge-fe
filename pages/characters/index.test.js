import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CharacterList, {getStaticProps} from "./index";
import {createMemoryHistory} from 'history'
import {characters, searchedCharacterObject} from './testData'
import { act } from 'react-dom/test-utils';
import {fetchLiveSearch} from '../../utils/apiCalls'
jest.mock('../../utils/apiCalls.js')

// beforeAll(() => {
//   global.fetch = jest.fn();
//   //window.fetch = jest.fn(); if running browser environment
// });

afterEach(cleanup);

describe("CharacterList in index.js", () => {

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

  it("user query should pull up correct result", () => {
    const mockedGetStaticProps = () => jest.isMockFunction(getStaticProps)
    mockedGetStaticProps(characters)
  //   fetchLiveSearch.mockResolvedValueOnce([])

    act(() => {
      render(
        <CharacterList characters={characters}/>
      );
    })

    const message = screen.queryByRole('heading', { name: /search by name above/i })
    const searchBar = screen.getByRole("textbox", {name: /character search bar/i});
    expect(message).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();

    userEvent.type((searchBar), 'Luke Skywalker')
    // fetchLiveSearch.mockResolvedValue(character)
  //   // screen.debug()

    const searchTerm = screen.getByDisplayValue('Luke Skywalker')
    expect(searchTerm).toBeInTheDocument()

    const searchResult = awascreen.queryByRole('link', { name: /luke skywalker a photo of luke skywalker/i })
    expect(searchResult).toBeInTheDocument()
    
  });

  // it("on refresh or navigation away and back, input should persist", async () => {
  //   const mockGetResults = jest.fn();
  //   const history = createMemoryHistory()

  //   render(
  //     <Router history={history} initialEntries={['/']}>
  //       <SearchBar getResults={mockGetResults} />
  //     </Router>
  //   );

  //   const input = screen.queryByRole('textbox', { name: /character search bar/i })
  //   expect(input).toBeInTheDocument();  

  //   userEvent.type((input), 'Boba Fett')
  //   const userSearch = await waitFor(() => screen.getByDisplayValue('Boba Fett'))
  //   await expect(userSearch).toBeInTheDocument()
  // });

});
