import { screen } from "@testing-library/dom";

describe("app bar component tests", () => {
  it("should render default title", () => {
    const el = document.createElement("div");
    el.innerHTML = `<app-bar title="Text Test"><p>child text</p></app-bar>`;
    document.body.appendChild(el);

    expect(
      screen.getByRole("heading", { name: "Text Test" })
    ).toBeInTheDocument();
  });
  it("should render nav bar", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("should render child item", () => {
    expect(screen.getByText("child text")).toBeInTheDocument();
  });
});
