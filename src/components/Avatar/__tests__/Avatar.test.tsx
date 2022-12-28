import { render, screen } from "@testing-library/react";
import { Avatar } from "../Avatar";
import "@testing-library/jest-dom";

describe("Avatar", () => {
  it("renders Avatar img", () => {
    const { container } = render(<Avatar />);

    const img = container.querySelector("img");

    expect(img).toBeInTheDocument();
  });
});
