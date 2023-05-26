import { screen } from "@testing-library/dom";

describe("app bar component tests", () => {
  it("should render default title", () => {
    const el = document.createElement("div");
    el.innerHTML = `<app-bar title="Text Test"><p>lala</p></app-bar>`;
    document.body.appendChild(el);

    expect(
      screen.getByRole("heading", { name: "Text Test" })
    ).toBeInTheDocument();
  });
});
