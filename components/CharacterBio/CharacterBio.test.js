import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterBio from './CharacterBio'
import {character} from './testData'

afterEach(cleanup);

describe("CharacterBio", () => {
  it("Elements render properly", () => {
    render(
      <CharacterBio character={character} />
    );
    
    const name = screen.getByRole('heading', { name: /luke skywalker/i })
    const image = screen.getByRole('img', { name: /luke skywalker/i })
    const dob = screen.getByText('Born: 19BBY')
    const height = screen.getByText('Height: 172 cm')
    const weight = screen.getByText('Weight: 77 kg')
    const hair = screen.getByText('Hair: blond')
    const skin = screen.getByText('Skin: fair')
    const eyes = screen.getByText('Eyes: blue')
    const species = screen.getByText('Species: Human')
    const homeworld = screen.getByText('Homeworld: Tatooine')
    const movies = screen.getByText('Appears in: 1st A New Hope')
    const starships = screen.getByText('Starships: X-wing')
    const vehicles = screen.getByText('Vehicles: Snowspeeder')

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(hair).toBeInTheDocument();
    expect(skin).toBeInTheDocument();
    expect(eyes).toBeInTheDocument();
    expect(species).toBeInTheDocument();
    expect(homeworld).toBeInTheDocument();
    expect(movies).toBeInTheDocument();
    expect(starships).toBeInTheDocument();
    expect(vehicles).toBeInTheDocument();
  });

});