import { renderHtml } from "./utils/tests";
import {  getByRole } from "@testing-library/dom";

import { InlineCircle } from "./components/inline-circle/index.js";
import { AppBar } from "./components/app-bar/index.js";

window.customElements.define("inline-circle", InlineCircle);
window.customElements.define("app-bar", AppBar);

describe('lala', () => {

  it("should render app bar", () => {
    const document = renderHtml("./index.html");
    
    expect(getByRole(document, 'navigation')).toBeInTheDocument();
  });
})
