import * as React from "react";
import { useState } from "react";
function MyBasicComponent(props) {
  const [name, setName] = useState(() => "Foo");
  return /* @__PURE__ */ React.createElement("div", null, props.message || "Hello", name, "! I can run in React, Vue, Solid or Svelte!");
}
export {
  MyBasicComponent as default
};
