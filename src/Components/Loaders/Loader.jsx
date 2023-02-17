import React from "react";
import "./loader.css";

function Loader(props) {
    let styleContainer = {
        display: "flex",
        width: "100%",
        justifyContent: "center",
      };
    
      return (
        <div style={styleContainer}>
          <Loader
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
        </div>
      );
    }
    
    export default Loader;