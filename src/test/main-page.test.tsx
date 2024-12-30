import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Main page test", () => {
  it("should render the main page", () => {
    render(<HomePage />);

    expect(screen.getByText("Counter Test")).toBeDefined();
  });
});
