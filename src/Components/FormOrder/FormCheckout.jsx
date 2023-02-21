import React, { useState } from "react";
import Button from "../Button/Button";

function InputForm(props) {
return (
    <div style={{ display: "flex", marginBottom: 8 }}>
    <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
    <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
    />
    </div>
);
}

export default function FormCheckout(props) {
const [userData, setUserData] = useState({
    Name: "",
    Phone: "",
    Email: "",
});

let fieldsForm = Object.keys(userData);

function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    newState[inputName] = value;
    setUserData(newState);
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(`Gracias por tu compra!`);
}

function formIsInvalid() {
    return !(
    userData.Name !== "" &&
    userData.Phone !== "" &&
    userData.Email !== ""
    );
}

return (
    <form onSubmit={onSubmit}>
    <h1>Llena tus datos para finalizar la compra 🛍</h1>
    {fieldsForm.map((field, index) => (
  <InputForm
    key={field.name + "_" + index} // Agregamos key con el nombre del campo y el índice
    value={userData[field]}
    name={field}
    onChange={onInputChange}
    label={field}
    userData={userData}
  />
))}

    <Button
        onClick={(evt) => props.onCheckout(evt, userData)}
        disabled={formIsInvalid()}
        type="submit"
    >
        Crear orden
    </Button>

    <Button onClick={() => setUserData({ name: "", email: "", phone: "" })}>
        Limpiar
    </Button>
    </form>
);
}
