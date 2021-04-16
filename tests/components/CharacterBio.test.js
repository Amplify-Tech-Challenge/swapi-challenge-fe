import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterBio from '../../components/CharacterBio/CharacterBio'
import {character} from '../testData'

afterEach(cleanup);

describe("CharacterBio", () => {
  it("Elements render properly", () => {
    render(
      <CharacterBio character={character} />
    );
    
    const name = screen.getByRole('heading', { name: /luke skywalker/i })
    const image = screen.getByRole('img', { name: /luke skywalker/i })
    const dob = screen.getByText('19BBY')
    const height = screen.getByText('172 cm')
    const weight = screen.getByText('77 kg')
    const hair = screen.getByText('blond')
    const species = screen.getByText('Human')
    const homeworld = screen.getByText('Tatooine')
    const movies = screen.getByText('A New Hope')
    const starships = screen.getByText('X-wing')
    const vehicles = screen.getByText('Snowspeeder')

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(hair).toBeInTheDocument();
    expect(species).toBeInTheDocument();
    expect(homeworld).toBeInTheDocument();
    expect(movies).toBeInTheDocument();
    expect(starships).toBeInTheDocument();
    expect(vehicles).toBeInTheDocument();
  });

});