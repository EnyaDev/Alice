import React from "react";
import { Ring } from '@uiball/loaders'
import "./loader.css";

function Loader(props) {

let styleContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
};

return (
  <div style={styleContainer}>
    <Ring size={40} speed={1.4} lineWeight={5} color="#689D6D" {...props} />
  </div>
);
}

export default Loader;