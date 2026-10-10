
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("hero component", () => {
  test("render hero image", () => {
    render(<Hero />);

    const heroimage = screen.getByAltText("Hero image");

    expect(heroimage).toBeInTheDocument();
    expect(heroimage).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });

  test("renders signup button", () => {
    render(<Hero />);

    const signupButton = screen.getByRole("button", {
      name: /sign up for free/i,
    });

    expect(signupButton).toBeInTheDocument();
  });
});
