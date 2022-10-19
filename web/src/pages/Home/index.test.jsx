import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { Home } from "./index";

describe("Home", () => {
  it("should redirect", async () => {
    const { debug, getByText } = render(<Home />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    expect(
      screen.getByText(/Dê o seu palpite na Copa do Mundo do Catar 2022!/i)
    ).toBeInTheDocument();

    // await user.click(screen.getByText(/about/i))
    await user.click(screen.getByText(/Criar minha conta/i));
    // debug();
    // console.log(getByText("Crie sua conta"));
    // expect(getByText("Crie sua conta")).toBeInTheDocument();
  });
});
