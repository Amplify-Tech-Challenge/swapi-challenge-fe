import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    const title = screen.queryByText('Welcome to Make Love not Star Wars')
    expect(title).toBeInTheDocument()
  });
});