import "@testing-library/jest-dom";
import React from 'react';
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../components/SearchBar/SearchBar";
import {fetchLiveSearch} from '../../utils/apiCalls'
jest.mock('../../utils/apiCalls.js')

afterEach(cleanup);

describe("SearchBar", () => {
  it("Elements render properly", () => {
    const mockGetResults = jest.fn();

    render(
      <SearchBar getResults={mockGetResults} />
    );

    const input = screen.getByRole("textbox", {name: /character search bar/i});
    const placeholder = screen.getByPlaceholderText("Search characters by name");

    expect(input).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it("user input renders on screen", async () => {
    const mockGetResults = jest.fn();
    render(
      <SearchBar getResults={mockGetResults} />
    );

    const input = screen.queryByRole('textbox', { name: /character search bar/i })
    expect(input).toBeInTheDocument();  

    userEvent.type((input), 'Boba Fett')
    const userSearch = await waitFor(() => screen.getByDisplayValue('Boba Fett'))
    await expect(userSearch).toBeInTheDocument()
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
