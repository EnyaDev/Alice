import React from "react";
import styles from "./button.css";


export default function Button(props) {
    // React.useState() -> [ stateVar, setterStateVar ]
    // const [colorState, setColorState] = React.useState("rgb(97, 150, 220)");

    // let styleButton = {
    // padding: props.padding,
    // backgroundColor: colorState,
    // };

    return (
    <button onClick={props.onClick}  className={styles.btn}>{props.children}</button>
    );
}