import "@testing-library/jest-dom";
import path from "path";
import fs from "fs";
const { TextEncoder, TextDecoder } = require("util");
Object.assign(global, { TextDecoder, TextEncoder });
const { JSDOM } = require("jsdom");

function renderHtml(filePath) {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../" + filePath),
    "utf8"
  );
  const dom = new JSDOM(html, { runScripts: "dangerously" });
  // const bootstrapScript = document.createElement("script");
  // bootstrapScript.setAttribute("type", "module");
  // bootstrapScript.setAttribute("src", "./components/bootstrap.js");
  // document.body.appendChild(bootstrapScript);
  const div = document.createElement("div");
  div.innerHTML = dom.window.document.body.innerHTML;
  document.body.appendChild(div);
}

export { renderHtml };
