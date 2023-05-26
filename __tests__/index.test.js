import { renderHtml } from "../utils/tests";
import { screen } from "@testing-library/dom";

describe("Layout page tests", () => {
  beforeAll(() => {
    renderHtml("./index.html");
  });
  it("should render app bar component", () => {
    expect(screen.getByTestId("app-bar")).toBeInTheDocument();
  });
  it("should render root template element", () => {
    expect(screen.getByTestId("root-template")).toBeInTheDocument();
  });
  it("should render components icon", () => {
    expect(screen.getByTestId("components-icon")).toHaveTextContent(
      "toggle_off"
    );
    expect(screen.getByTestId("components-icon")).toHaveClass(
      "material-icons md-28"
    );
  });
  it("should have app-bar link", () => {
    expect(screen.getByRole("link", { name: /appbar/i })).toBeInTheDocument();
  });
  it("should have inline-circle link", () => {
    expect(
      screen.getByRole("link", { name: /inline circle/i })
    ).toBeInTheDocument();
  });
});
