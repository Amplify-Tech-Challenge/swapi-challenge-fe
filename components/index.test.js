import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CharacterList, {getStaticProps} from "../pages/characters/index";
import {characters} from './testData'
import { act } from 'react-dom/test-utils';
jest.mock('../utils/apiCalls.js')

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

  // it("user query should pull up correct result", async () => {
  //   const mockedGetStaticProps = () => jest.isMockFunction(getStaticProps)
  //   mockedGetStaticProps(characters)

  //   act(() => {
  //     render(
  //       <MemoryRouter>
  //         <CharacterList characters={characters}/>
  //       </MemoryRouter>
  //     );
  //   })

  //   const message = screen.queryByRole('heading', { name: /search by name above/i })
  //   const searchBar = screen.getByRole("textbox", {name: /character search bar/i});
  //   expect(message).toBeInTheDocument();
  //   expect(searchBar).toBeInTheDocument();

  //   userEvent.type((searchBar), 'Luke Skywalker')
  //   const searchTerm = screen.getByDisplayValue('Luke Skywalker')
  //   expect(searchTerm).toBeInTheDocument()

  //   const characterCard = await waitFor(() => screen.queryByTestId('charactercard-1'))
  //   screen.debug()
  //   expect(characterCard).toBeInTheDocument()
    
  // });

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
