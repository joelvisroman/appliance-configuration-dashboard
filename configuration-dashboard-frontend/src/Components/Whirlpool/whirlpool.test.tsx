import React from "react";
import ReactDom from "react-dom";
import { Whirlpool } from "./whirlpool";

it("renders the Whirlpool UI", () => {
  const div = document.createElement("div");
  ReactDom.render(<Whirlpool />, div);
  ReactDom.unmountComponentAtNode(div);
});
