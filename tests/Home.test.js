import "@testing-library/jest-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "../pages/index";
import { act } from "react-dom/test-utils";
jest.mock("../utils/apiCalls.js");

afterEach(cleanup);

describe("Home", () => {
  localStorage.clear();

  it("should render without crashing", async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    const welcome = screen.getByText('Welcome to Make Love not Star Wars')
    expect(welcome).toBeInTheDocument()
  })

  // it("should navigate to the search screen", async () => {

  //   const navigateToNextLocation = () => {
  //     const loc = window.location.href + "/next";
  //     window.location.replace(loc);
  //   };
  //   const mockedReplace = jest.fn();
  //   const originalWindow = { ...window };
  //   const windowSpy = jest.spyOn(global, "window", "get");

  //   windowSpy.mockImplementation(() => ({
  //     ...originalWindow,
  //     location: {
  //       ...originalWindow.location,
  //       href: "http://localhost:3000/characters",
  //       replace: mockedReplace,
  //     },
  //   }));
  
  //   act(() => {
  //     render(
  //       <MemoryRouter>
  //         <Home />
  //       </MemoryRouter>
  //     );
  //   });

  //   const link = screen.getByRole('link', { name: /character search → search for characters by name/i })
  //   expect(link).toBeInTheDocument()

  //   await waitFor(async() => {
  //     userEvent.click(link)
      
  //     expect(mockedReplace).toBeCalledWith("http://localhost:3000/characters")
  //   });
    
  // });
})
