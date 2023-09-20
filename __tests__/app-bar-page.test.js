import { screen } from "@testing-library/dom";
import { renderHtml } from "../utils/tests";
import expect from "expect";

describe("App bar page tests", () => {
  beforeAll(() => {
    renderHtml("./pages/app-bar.html");
  });
  it("should render title", () => {
    expect(
      screen.getByRole("heading", { name: /App Bar Example/i })
    ).toBeInTheDocument();
  });
});
